
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();


const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
};

export default connectToMongoDB;



