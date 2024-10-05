import mongoose from "mongoose";
//import { MONGODB_URI } from "./config.js";

//export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
//};