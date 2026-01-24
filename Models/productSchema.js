import mongoose from 'mongoose'

const productModel = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'please enter product name']
        },
        discription:{
            type:String,
            required:[true,'please enter product discription']
        },
        rating:{
            type:Number,
            default:0
        },
        price:{
            type:Number,
            required:true,
            maxLength:[8,"max length cannot exceed 8 char"]
        },
        category:{
            id: mongoose.Schema.Types.ObjectId,
            name: String,
            slug: String
        },

        images:[
            {
                url:{
                    type:String,
                    required:true
                },
                public_id:{
                  type:String,
                  required:true
                },
                isMain:{
                    type:Boolean,
                    default:false
                }
            }
        ]
    }
)
const productModels = mongoose.model('Product',productModel)
export default productModels

