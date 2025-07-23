import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import connectToMongoDB from "./database/db.js";
import authRouter from "./routes/auth.js";
import noteRouter from "./routes/note.js";
import middleware from "./middleware/middleware.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}));



// Routes
app.use("/api/auth", authRouter);
app.use("/api/note", middleware, noteRouter);



// Server start
app.listen( process.env.PORT, async () => {
  try {
    await connectToMongoDB();
    console.log(`Server is running at port ${ process.env.PORT}`);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
});
