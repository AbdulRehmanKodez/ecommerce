import productSchema from '../Models/productSchema.js'
import productCatagorys from '../UTILS/catagorySearch.js'
import Productsearch from '../UTILS/ProductSearch.js'
import reviewSchema from '../Models/reviewSchema.js'
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
      
      const searchProduct = new Productsearch(productSchema,req.query.search||"")
      const searchresult = await searchProduct.search()
       
        res.status(200).json({data:searchresult})
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

export const productCatagory  = async (req,res,next)=>{
  try{
      const searchCatagory = new productCatagorys(productSchema,req.query.category)
      const catagoryResult = await searchCatagory.searchCatagory()
      res.status(200).json({catagoryResult})

  }catch(err){
    res.status(400).json({message:"products catagorys nhi mile",error:err
       })
      console.log(err);
  }
}

export const reviewControler = async (req,res)=>{
   try{
     const  {comment,rating} = req.body
     const userId = req.user.id
     const productId = req.params.productid
      const productexist = await productSchema.findById(productId)
      if(!productexist){
        return res.status(404).json({message:"product dosnot exist"})
      }
        
        const alreadyReviewed = await reviewSchema.findOne({
      userId: userId,
      productId: productId
    })

    if (alreadyReviewed) {
      return res.status(409).json({ message: "Review already exists" })
    }

       const newReview = new reviewSchema({userId:userId,productId:req.params.productid,comment,rating})
          const saveReview = await newReview.save()
          res.status(201).json({message:"review save sucessfully"})
   }catch(err){
    res.status(400).json({message:"review me error",error:err
       })
      console.log(err);
  }

}