import signinSchema from '../Models/signupSchema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const signcontroller = async(req,res)=>{
    try{

        const {name,email,password} =  req.body
        const hashedpassword = await bcrypt.hash(password,10)
        const checkedData = new signinSchema({name,email,password:hashedpassword})
        const saveSignup = await checkedData.save()        
        const token = jwt.sign({id:saveSignup.id,role:saveSignup.role},process.env.SECREAT_KEY,{expiresIn:"7d"})
        res.cookie("token",token,{
          httpOnly:true,
          secure:false,
          sameSite:"strict",
          
        })
        res.status(200).json({message:"singnup data save ho gaya",data:saveSignup,token})
    }catch(error){
      res.status(400).json({message:"singnup data save nhi howa",err:error})
      console.log(error);
      
    }

}

export const logcontroller = 
    async (req,res)=>{
    try{
      const data =  req.body
       const emailCheck =await signinSchema.findOne({email:data.email})
      if(!emailCheck){
       return res.status(400).json({message:'email is wrong'})
      }
      if(await bcrypt.compare(data.password,emailCheck.password)){
       
        
        const token = jwt.sign({id:emailCheck.id , role:emailCheck.role},process.env.SECREAT_KEY)
         res.cookie("token",token,{
          httpOnly:true,
          secure:false,
          sameSite:"strict",
          
        })
               
         res.status(200).json({message:'you are a previous user', userId:emailCheck.id})
      }else{
        return res.status(400).json({message:'password is wrong'})
      }

    }catch(err){
       res.status(400).json({message:'something went wrong ' ,  error:err})
       console.log(err);
    }
    
    
}

export const deleteaccountcontroller = async (req,res)=>{
  try{
     const id = req.params.id
     const deleteuser = await signinSchema.findByIdAndDelete(id)
     if(!deleteuser){
      return res.status(400).json({message:"user does not find"})
     }
      res.clearCookie("token")
      res.status(200).json({message:"account seleted sucess fully"})
  }catch(err){
    res.status(400).json({message:'account del me error',error:err})
  }
}

export const logoutController = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,      
      sameSite: "strict"
    })

    res.status(200).json({ message: "logout ho gaya" })
  } catch (err) {
    res.status(500).json({ message: "logout error" ,error:err})
    console.log(err)
  }
}


