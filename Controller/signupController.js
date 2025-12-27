import signinSchema from '../Models/signupSchema.js'


const Controller = async(req,res)=>{
    try{

        const signupData =  req.body
        const checkedData = new signinSchema(signupData)
        const saveSignup = await checkedData.save()        
        res.status(200).json({message:"singnup data save ho gaya",data:saveSignup})
    }catch(error){
      res.status(400).json({message:"singnup data save nhi howa",err:error})
      console.log(error);
      
    }

}

export default Controller