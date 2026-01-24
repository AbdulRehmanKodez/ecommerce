import signinSchema from '../Models/signupSchema.js'
export const allusers = async(req,res)=>{
   try{
    const alluser =await signinSchema.findOne()
    res.status(200).json({message:"all users",alluser})
   }catch(err){
   res.status(400).json({message:"there is an error while getting all users",error:err})
   console.log(err)
   }}
    
export const deleteaccountcontroller = async (req,res)=>{
  try{
     const id = req.params.id
     const deleteuser = await signinSchema.findByIdAndDelete(id)
     if(!deleteuser){
      return res.status(400).json({message:"user does not find"})
     }
      
      res.status(200).json({message:"account deleted by admin sucess fully"})
  }catch(err){
    res.status(400).json({message:'admin : account del me error',error:err})
  }
}

export const updateRole = async (req,res)=>{
    try{
        const user_id = req.params.id
        const drole = req.body.role
           console.log(drole)
            if(!['user','admin'].includes(drole)){
               return res.status(404).json({ message: 'role not allowed' })
            }
        const role_upt =await signinSchema.findByIdAndUpdate(user_id,{role:drole},{new:true})
                  
         if (!role_upt) {
      return res.status(404).json({ message: 'User nahi mila' })
    }
    res.status(200).json({
      message: 'role updated successfully',
      user: {
        id: role_upt._id,
        role: role_upt.role
      }})
    }catch(err){

   res.status(400).json({message:'admin : user role upt me error',error:err.message})
   console.log(err);
   
        
    }
}

export const deleteuser = async (req,res)=>{
  try{
     const id = req.params.id
     const deleteuser = await signinSchema.findByIdAndDelete(id)
     if(!deleteuser){
      return res.status(400).json({message:"user does not find"})
     }
      res.clearCookie("token")
      res.status(200).json({message:"account deleted sucess fully"})
  }catch(err){
    res.status(400).json({message:'account del me error',error:err})
  }
}
