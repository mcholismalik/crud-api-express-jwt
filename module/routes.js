import express from "express"

import customersRoutes from "./customers/customers.routes"
import authRoutes from "./auth/auth.routes"
import authJwt from "../middleware/auth.jwt"

const router = express.Router()

router.use('/auth', authRoutes)
router.use(authJwt)
router.use('/customers', customersRoutes)

export default router