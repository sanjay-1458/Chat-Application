import mongoose from "mongoose";
import { config } from "dotenv";
config();
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI,{
      
      useNewUrlParser: true,
      useUnifiedTopology: true,
    
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
