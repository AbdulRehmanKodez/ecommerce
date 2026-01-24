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
    },
    role: {
        type:String,
        enum:['user','admin'] ,
        default:"user"
    }
    })
      const signup  = mongoose.model('signupSchema',schema);
       export default signup