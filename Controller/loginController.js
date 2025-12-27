import signinSchema from '../Models/signupSchema.js'

 const controller = 
    async (req,res)=>{
    try{
      const data =  req.body
       const emailCheck =await signinSchema.findOne({email:data.email})
      if(!emailCheck){
       return res.status(400).json({message:'email is wrong'})
      }
      if(data.password === emailCheck.password){
        res.status(200).json({message:'you are a previous user', userId:emailCheck.id})
      }else{
        return res.status(400).json({message:'password is wrong'})
      }

    }catch(err){
       res.status(400).json({message:'something went wrong ' ,  error:err})
       console.log(err);
    }
    
    
}
export default controller