import mongoose from 'mongoose'
const schema = new mongoose.Schema({

    name:{
        type:String,
        required:true
        
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true 
    }
    })
      const signup  = mongoose.model('signupSchema',schema);
       export default signup