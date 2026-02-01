import { singleproduct, productCreate, productDelete, allproduct, updateProduct, productCatagory, reviewControler, deleteReview,} from '../Controller/productController.js'
import express from 'express'
import auth from '../Middlewares/auth.js'

const router = express.Router()
router.use(auth)



router.get('/singleproduct/:id',singleproduct)
router.get('/allproduct',allproduct)
router.post('/review/:productid',reviewControler)
router.get('/productCatagory',productCatagory)
router.delete('/reviewdelete/:revid',deleteReview)
export default router