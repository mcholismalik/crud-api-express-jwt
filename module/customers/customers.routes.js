import express from "express"
import validate from "express-validation"

import { getAllCustomers, getCustomerByID } from "./customers.controller"
import customersValidation from "../../middleware/validation/customers.validation"

const router = express.Router()
router.get('/', getAllCustomers)
router.get('/:id', validate(customersValidation.getCustomerByID), getCustomerByID)

export default router