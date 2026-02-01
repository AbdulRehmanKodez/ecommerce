import express from "express";
import db from '../backend/db.js' ;
import singnuprouter from '../backend/Routes/signupRoutes.js'
import adminRoutes from '../backend/Routes/adminRoutes.js'
import productRouter from './Routes/productsRoutes.js'
import cookieParser from "cookie-parser";
import orderRouter from './Routes/orderRoutes.js'
const app = express()
app.use(cookieParser())
app.use(express.json())

app.use('/user',singnuprouter)
app.use('/products',productRouter)
app.use('/admin',adminRoutes)
app.use('/user/product',orderRouter)



db()
app.listen(3000,()=>{
    console.log('localhost connect ho gaya ha');
})
