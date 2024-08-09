const express = require('express')
const AuthController = require('../controllers/AuthController')
const authMiddleware = require('../middleware/authMiddleware')

authRouter = express.Router()

authRouter.get('/', AuthController.index)
authRouter.post('/sign-up', AuthController.signUp)
authRouter.post('/sign-in', AuthController.signIn)
authRouter.get('/protected', authMiddleware, AuthController.protected)

module.exports = authRouter