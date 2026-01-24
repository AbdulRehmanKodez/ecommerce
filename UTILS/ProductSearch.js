class Productsearch {

     constructor(productlist, keyword){
        this.productlist = productlist
        this.keyword = keyword 

     }
      
     async search(){
        
        console.log(this.keyword)
          return await this.productlist.find({name:{
            $regex:this.keyword , $options:"i"
          }})
     }
      
     
}

export default Productsearch