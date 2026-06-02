const fs = require('fs');
const path = require('path');
const vm = require('vm');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

function readDefaultProducts() {
    const scriptPath = path.join(__dirname, '..', 'public', 'script.js');
    const source = fs.readFileSync(scriptPath, 'utf8');
    const start = source.indexOf('const DEFAULT_PRODUCTS = [');

    if (start === -1) {
        throw new Error('DEFAULT_PRODUCTS was not found in public/script.js');
    }

    const arrayStart = source.indexOf('[', start);
    const endMarker = '\n];';
    const arrayEnd = source.indexOf(endMarker, arrayStart);

    if (arrayEnd === -1) {
        throw new Error('Could not find the end of DEFAULT_PRODUCTS.');
    }

    const arrayLiteral = source.slice(arrayStart, arrayEnd + 2);
    return vm.runInNewContext(`(${arrayLiteral})`);
}

async function seedProducts() {
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI is missing from backend/.env');
    }

    await mongoose.connect(process.env.MONGO_URI);

    const products = readDefaultProducts();
    let createdOrUpdated = 0;

    for (const product of products) {
        await Product.updateOne(
            { name: product.name },
            {
                $set: {
                    ...product,
                    images: product.images || (product.image ? [product.image] : []),
                    isActive: true
                }
            },
            { upsert: true, runValidators: true }
        );
        createdOrUpdated += 1;
    }

    console.log(`Seeded ${createdOrUpdated} products.`);
    await mongoose.disconnect();
}

seedProducts().catch(async (err) => {
    console.error(err.message);
    await mongoose.disconnect().catch(() => null);
    process.exit(1);
});
