import express from 'express'
import { allusers, deleteuser, updateRole } from '../Controller/adminController.js'
import rolecheck from '../Middlewares/rolecheck.js'
import { productCreate, productDelete, updateProduct } from '../Controller/productController.js'
import auth from '../Middlewares/auth.js'
const router = express.Router()
router.use(auth)
router.get("/allusers",allusers)
router.put('/updaterole/:id',updateRole)
router.post('/createproduct',rolecheck,productCreate)
router.delete('/deleteproduct/:id',rolecheck,productDelete)
router.put('/updateproduct/:id',rolecheck,updateProduct)
router.delete('/deleteuser/:id',deleteuser)



export default router