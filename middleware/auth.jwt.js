import Jwt from "jsonwebtoken";

import ApiResponse from "../utils/apiResponse"
import config from "../config"

export default (req, res, next) => {         
    let token = req.body.token || req.headers.authorization || req.cookies['x-access-token']
    if(token) {
        try {
            token = token.replace('Bearer ','') 
            Jwt.verify(token, config.secretKey, (err, decoded) => {
                if(err) {
                    res.json(ApiResponse.unAuthorized('Invalid token', err))
                } else {
                    req.decoded = decoded
                    next()
                }
            })
        } catch(err) {
            res.json(ApiResponse.unAuthorized('Invalid token', err))
        }
    } else {        
        res.json(ApiResponse.unAuthorized('Token not found'))
    }  
}