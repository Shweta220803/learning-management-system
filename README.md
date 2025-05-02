# Learning Management System (LMS)

A fully functional Learning Management System built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). The system is styled with **Tailwind CSS**, secured with **Clerk** authentication, and uses **Stripe** for payment processing. Stripe **webhooks** are used for real-time event handling like payment success or subscription updates.

---

## Features

- Authentication & session management using Clerk
- Stripe integration for secure payments
- Stripe webhook support to handle real-time events
- Role-based dashboard (Admin, Instructor, Student)
- Course creation, enrollment, and management
- Tailwind CSS for modern responsive design
- RESTful APIs for frontend-backend communication

---

## Technology Stack

### Frontend:

- React.js
- Tailwind CSS
- Clerk (for authentication)
- Stripe (for payments)
- Vite (for development/build)
- Deployed on **Vercel**

### Backend:

- Node.js
- Express.js
- MongoDB + Mongoose + MONGODB Atlas
- Webhook
- Stripe Webhooks
- Dotenv for environment configuration

## Getting Started

### 1. Clone the Repository

git clone https://github.com/yourusername/lms-mern-stripe-clerk.git
cd lms-mern-stripe-clerk

# Vite / Frontend Configuration

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=
VITE_CURRENCY=

# Backend Configuration

PORT=3000
MONGODB_URI=your_mongodb_connection_string
CURRENCY=USD

# Clerk Authentication

CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Cloudinary (Image Upload)

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

# Stripe (Payments)

STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET_KEY=your_stripe_webhook_secret

# Running the Project Locally

Start the Backend:
cd backend
npm install
npm start

Start the Frontend:
cd ../frontend
npm install
npm run dev
