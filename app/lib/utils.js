import mongoose from "mongoose";
export default async function connectToDB() {
        try {
          const db = await mongoose.connect(process.env.MONGODB);
          console.log('Connected to MongoDB');
        } catch (error) {
          console.error('MongoDB connection error:', error);
        }
      }
      