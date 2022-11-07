import express from "express";
import user from '../controllers/authControllers.js';
const router = express.Router()

router.post('/signup', user.userRegister)
router.post('/otpvarification', user.userOtpVerification)
router.post('/login', user.userLogin)

  
export default router;