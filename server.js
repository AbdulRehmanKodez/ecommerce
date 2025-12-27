import express from "express";
import db from '../backend/db.js' ;
import singnuprouter from '../backend/Routes/signupRoutes.js'
import loginrouter from '../backend/Routes/loginRoutes.js'
import productRouter from './Routes/productsRoutes.js'
const app = express()
app.use(express.json())

// app.use('/user',singnuprouter)
// app.use('/user',loginrouter)


app.use('/user',productRouter)



db()
app.listen(3000,()=>{
    console.log('localhost connect ho gaya ha');
})
