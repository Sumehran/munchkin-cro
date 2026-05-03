# munchkin.cro 

A custom crochet e-commerce platform built with HTML, CSS, JavaScript, Node.js, Express, and MongoDB.

---

## Group 9
- Sumehra Afsheen Nuhaa
- Shazzad Hossan Labib
- Tamim Shariar

---

## Prerequisites

Make sure you have these installed:
- [Node.js](https://nodejs.org) (v18 or higher)
- [MongoDB Community](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com)

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Sumehran/munchkin-cro.git
cd munchkin-cro
```

### 2. Install backend dependencies
```bash
cd backend
npm install
```

### 3. Create `.env` file
Inside the `backend/` folder, create a file called `.env` and add:
```
PORT=8080
MONGO_URI=mongodb://localhost:27017/munchkincro
JWT_SECRET=munchkincro_secret_2025
```

### 4. Start MongoDB
**On Mac:**
```bash
brew tap mongodb/brew
brew install mongodb-community@7.0
brew services start mongodb-community@7.0
```

**On Windows:**
- Download and install [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- MongoDB starts automatically after installation

### 5. Start the server
```bash
cd backend
npx nodemon server.js
```

### 6. Open in browser
```
http://localhost:8080
```

---

## Project Structure

```
munchkin-cro/
├── public/                 # Frontend files
│   ├── index.html
│   ├── shop.html
│   ├── product.html
│   ├── cart.html
│   ├── login.html
│   ├── admin.html
│   ├── about.html
│   ├── custom-order.html
│   ├── track-order.html
│   ├── style.css
│   ├── script.js
│   └── img/
│
└── backend/                # Backend files
    ├── server.js
    ├── .env                # Create this manually (not on GitHub)
    ├── routes/
    │   ├── auth.js
    │   ├── products.js
    │   ├── orders.js
    │   ├── reviews.js
    │   └── customOrders.js
    ├── models/
    │   ├── User.js
    │   ├── Product.js
    │   ├── Order.js
    │   ├── Review.js
    │   └── CustomOrder.js
    └── middleware/
        └── auth.js
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Authentication | JWT (JSON Web Tokens) |
| Image Upload | Multer + Cloudinary |

---

## Features

- Browse crochet products with filters (category, price, color)
- Product detail page with image gallery
- Add to cart and checkout via WhatsApp
- Custom order form with reference image upload
- Order tracking system
- Customer reviews and ratings
- Admin panel (product management, order management, user management)
- User registration and login
