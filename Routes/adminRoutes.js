import express from 'express'
import { allusers, deleteuser, updateRole } from '../Controller/adminController.js'
import rolecheck from '../Middlewares/rolecheck.js'
import { productCreate, productDelete, updateProduct } from '../Controller/productController.js'
import {allorders} from '../Controller/orderController.js'
import auth from '../Middlewares/auth.js'
const router = express.Router()
router.use(auth,rolecheck)
router.get("/allusers",allusers)
router.put('/updaterole/:id',updateRole)
router.post('/createproduct',productCreate)
router.delete('/deleteproduct/:id',productDelete)
router.put('/updateproduct/:id',updateProduct)
router.delete('/deleteuser/:id',deleteuser)
router.get('/allorders',allorders)


export default router