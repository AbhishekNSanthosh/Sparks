const jwt = require("jsonwebtoken");
const Admin = require("../Models/Admin");

module.exports = {
    isLoggedIn: (req, res, next) => {
        if (!req.headers.authorization) {
            res.status(403).json({
                status: 'failed',
                code: 403,
                message: 'Token not found Authentication failed'
            })
        }
        let token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(403).json({
                status: false,
                message: "Token not found"
            })
        }
        jwt.verify(token, process.env.Auth_Sec, async (err, decoded) => {
            if (decoded) {
                const adminData = await Admin.findById(decoded.userId)
                console.log(adminData)
                // const { password, __v, ...adminInfo } = adminData._doc
                if (adminData) {
                    req.admin = adminData
                    next()
                } else {
                    return res.status(403).json({
                        code: 403,
                        status: 'Authentication failed due to some error!',
                        message: 'Authentication token expired!!! Please Login to continue.'

                    })
                }
            } else {
                return res.status(403).json({
                    code: 403,
                    status: 'Authentication falied',
                    message: 'Authentication token expired!!! Please Login to continue.'

                })
            }
            if (err) {
                res.status(400).json({
                    status: false,
                    message: "Authentication failed",
                    error: err
                })
            }
        })
    }
}