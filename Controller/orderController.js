import orderSchema from '../Models/orderSchema.js'
import responce from '../UTILS/responceFunction.js'
import productSchema from '../Models/productSchema.js'

export const order = async (req, res) => {
  try {
    const userId = req.user.id
    const {
      items,
      paymentMethod,
      shippingAddress,
      totalAmount
    } = req.body
    
    const order = await orderSchema.create({
      userId: userId,
      totalAmount,
      items,
      paymentMethod: paymentMethod,
      shippingAddress: shippingAddress
    })

    responce(res, 201, "Order placed successfully 🎉")

  } catch (err) {
    console.log(err)
    responce(res, 400, "Error while placing order")
  }
}

export const allorders = async (req,res)=>{try{
  const all_order  = await orderSchema.find()
  responce(res,200,"all orders",all_order)
}catch(err){
responce(res,400,"allorder me error")
}}