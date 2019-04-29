import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"

import config from "../../config"
import Customers from "../../module/customers/customers.model"
import ApiResponse from "../../utils/apiResponse"

const register = async (req, res) => {
	try {
		let hash = await bcrypt.hash(req.body.password, 10)
		req.body['hash'] = hash
		let data = await Customers.create(req.body)
		ApiResponse.created(res, 'Register success', data)
	} catch (err) {
		ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const login = async (req, res) => {
	try {
		let data = await Customers.findOne({ where: { username: req.body.username } })
		let check = await bcrypt.compare(req.body.password, data.hash)
		let token = await Jwt.sign(config.payLoad, config.secretKey)
		ApiResponse.ok(res, 'Login success', { token: token })
	} catch (err) {
		ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

export { register, login }