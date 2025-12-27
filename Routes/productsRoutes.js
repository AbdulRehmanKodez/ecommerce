import { singleproduct, productCreate, productDelete, allproduct, updateProduct,} from '../Controller/productController.js'
import express from 'express'
const router = express.Router()

router.post('/createproduct',productCreate)
router.post('/deleteproduct/:id',productDelete)
router.get('/singleproduct/:id',singleproduct)
router.get('/allproduct',allproduct)
router.put('/updateproduct/:id',updateProduct)

export default router