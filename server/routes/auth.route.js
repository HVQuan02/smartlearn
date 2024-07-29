const express = require('express')
const AuthController = require('../controller/AuthController')

authRouter = express.Router()

authRouter.get('/', AuthController.index)

module.exports = authRouter