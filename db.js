import mongoose from "mongoose"

const dbUrl = ' mongodb://localhost:27017/libarary'
const connection = mongoose.connect(dbUrl)

const backendconnect =async ()=>{

const db = await mongoose.connection
db.on('connected',()=>{
  console.log('database connect ho gayi ha');
  
})
db.on('disconnected',()=>{
  console.log('database disconnect ho gayi ha');
  
})
db.on('error',()=>{
        console.log('error ho ga')
        
    })
    
}


    export default backendconnect