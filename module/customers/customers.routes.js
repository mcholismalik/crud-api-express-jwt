import express from "express"
import validate from "express-validation"

import { getAllCustomers, getCustomerByID, updateCustomerByID } from "./customers.controller"
import customersValidation from "../../middleware/validation/customers.validation"

const router = express.Router()
router.get('/', getAllCustomers)
router.get('/:id', validate(customersValidation.getCustomerByID), getCustomerByID)
router.put('/', validate(customersValidation.updateCustomerByID), updateCustomerByID)

export default router