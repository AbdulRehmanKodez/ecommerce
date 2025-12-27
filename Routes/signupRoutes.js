import express from "express"
import signinControl from '../Controller/signupController.js'
const router  = express.Router()

router.post('/signup',signinControl)
export default router

