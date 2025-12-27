import productSchema from '../Models/productSchema.js'

export const productCreate = async (req,res,next)=>{
    try{
    const data =  req.body
    const createData = await productSchema.create(data)
    
    res.status(200).json({data:createData})
}catch(error){
   res.status(400).json({message:"product create nhi howa",err:error})
      console.log(error);
      
}}

export const productDelete = async (req,res,next)=>{
    try{
        
         await productSchema.findByIdAndDelete(req.params.id)
        res.status(200).json({message:'product delete sucessfully'})
    }catch(errs){
       res.status(400).json({message:"product delete nhi howa",err:errs
       })
      console.log(errs);
      
    }   
}

export const singleproduct = async (req,res,next)=>{
    try{
        const id = req.params.id
        const findData =await productSchema.findById(id)
        res.status(200).json({message:'ye lo data',data:findData})
    }catch(err){
       res.status(400).json({message:"products nhi mile",error:err
       })
      console.log(err);
      
    }
}

export const allproduct = async (req,res,next)=>{
    try{
       const allproduct = await productSchema.find()
        res.status(200).json({data:allproduct})
    }catch(err){
        res.status(400).json({message:"products nhi mile",error:err
       })
      console.log(err);
    }
}


export const updateProduct = async (req,res,next)=>{
    try{
        const id = req.params.id
        const data = req.body
        const findProduct  = await productSchema.findById(id)
          if(!findProduct){
            res.status(400).json({message:'product not found'})
          }
        const updateData = await productSchema.findByIdAndUpdate(id,data,{new:true})

        res.status(200).json({message:'update ho gaya',data:updateData})
        
    }catch(err){
         res.status(400).json({message:"products nhi mile",error:err
       })
      console.log(err);
    }
}