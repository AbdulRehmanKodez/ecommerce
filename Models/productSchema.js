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
const productModels = mongoose.model('model',productModel)
export default productModels

