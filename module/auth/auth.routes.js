import express from "express"
import validate from "express-validation"

import { register, login } from "./auth.controller"
import authValidation from "../../middleware/validation/auth.validation"

const router = express.Router()

router.post('/login', validate(authValidation.login), login)
router.post('/register', validate(authValidation.register), register)

export default router