import Customers from "./customers.model"
import ApiResponse from "../../utils/apiResponse"

const getAllCustomers = async (req, res) => {
	try {
		let data = await Customers.findAll()
		ApiResponse.ok(res, 'Get all customers sucess', data)
	} catch (err) {
		ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const getCustomerByID = async (req, res) => {
	try {
		let data = await Customers.findByPk(req.params.id)
		ApiResponse.ok(res, 'Get customer by id success', data)
	} catch (err) {
		ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const updateCustomerByID = async (req, res) => {
	try {
		let data = await Customers.update(
			req.body,
			{ where: { id: req.body.id } }
		)
		ApiResponse.ok(res, 'Update customer by id success', data)
	} catch (err) {
		ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

export { getAllCustomers, getCustomerByID, updateCustomerByID }