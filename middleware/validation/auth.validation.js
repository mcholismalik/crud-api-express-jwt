import Joi from "joi"

export default {
    register: {
        body: {
            id: Joi.number().required(),
            username: Joi.string().required(),
            password: Joi.string().required(),
            full_name: Joi.string().required(),
            email: Joi.string().required(),
            is_activated: Joi.number().required()
        }
    },
    login: {
        body: {
            username: Joi.string().required(),
            password: Joi.string().required()
        }
    }
}


