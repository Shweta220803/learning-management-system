import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

// Initialize Express app
const app = express();

// Connet to database
connectDB();

// Middleware
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/clerk", express.json(), clerkWebhooks);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
