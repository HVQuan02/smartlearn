const express = require('express')
const AuthController = require('../controllers/AuthController')

authRouter = express.Router()

authRouter.get('/', AuthController.index)
authRouter.post('/sign-up', AuthController.signUp)
authRouter.post('/sign-in', AuthController.signIn)

module.exports = authRouter