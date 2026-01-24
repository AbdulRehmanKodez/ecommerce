
import env from 'dotenv'
env.config()
const rolecheck =async (req,res,next)=>{
  
    console.log(req.user.role);
    

    if(req.user.role !== "admin"){
        return res.status(401).json({message:"you are not allowed to acess this rout"}) 
    }
      
    
    next()
}

export default rolecheck