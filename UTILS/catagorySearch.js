class productCatagorys {
    constructor(productList,catagory){
        this.catagory = catagory 
        this.productList = productList
    }

    async searchCatagory (){
      console.log(this.catagory);
      let filter = {}

      if(!this.catagory){
             return []
       
      }
       
        filter =  {"category.name":{$regex  :new RegExp(`^${this.catagory}$`,'i')}}
          return await this.productList.find(filter)

      
      
    }
} 
export default productCatagorys