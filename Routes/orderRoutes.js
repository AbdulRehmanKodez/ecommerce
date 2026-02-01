import express from 'express'
import {order} from '../Controller/orderController.js'
import auth from '../Middlewares/auth.js'
const router = express.Router()
router.use(auth)
router.post('/order',order)


export default router