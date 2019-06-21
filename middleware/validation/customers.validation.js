import Joi from "joi"

export default {
    getCustomerByID: {
        params: {
            id: Joi.number().required()
        }
    },
    updateCustomerByID: {
        body: {
            id: Joi.number().required(),
            username: Joi.string(),
            full_name: Joi.string(),
            email: Joi.string(),
            is_activated: Joi.boolean()
        }
    },
}