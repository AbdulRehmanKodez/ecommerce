import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

const dbUrl = process.env.DATA_BASE

const backendconnect = async () => {
  try {
    await mongoose.connect(dbUrl)

    console.log("database connect ho gayi hai")

    mongoose.connection.on("disconnected", () => {
      console.log("database disconnect ho gayi hai")
    })

    mongoose.connection.on("error", (err) => {
      console.log("database error:", err.message)
      
      
    })

  } catch (err) {
    console.log("connection failed:", err.message)
    console.log(err);
    
  }
}

export default backendconnect
