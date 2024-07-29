const express = require('express')
const AuthController = require('../controllers/AuthController')

authRouter = express.Router()

authRouter.get('/', AuthController.index)
authRouter.post('/sign-up', AuthController.signUp)

module.exports = authRouter