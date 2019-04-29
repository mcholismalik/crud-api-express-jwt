import Joi from "joi"

export default {
    getCustomerByID: {
        params: {
            id: Joi.number().required()
        }
    }
}