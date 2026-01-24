import express from "express"
import {signcontroller,logcontroller, logoutController, deleteaccountcontroller} from '../Controller/signupController.js'

const router  = express.Router()

router.post('/signup',signcontroller)
router.post('/login',logcontroller)
router.post('/logout',logoutController)
router.delete('/delaccount/:id',deleteaccountcontroller)
export default router

