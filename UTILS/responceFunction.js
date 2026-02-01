const responce = (res,status,message,data)=>{
   res.status(status).json({message,data})
}

export default responce