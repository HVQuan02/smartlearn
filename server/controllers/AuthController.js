const User = require('../models/User')

class AuthController {
  // [GET] /auth/
  index(req, res) {
    res.send('Auth is on ...')
  }

  // [POST] /auth/sign-up
  async signUp(req, res) {
    try {
      await User.create(req.body)
      res.send('User created successfully!') // debug
    }
    catch(err) {
      res.status(500).send(err)
    }
  }
}

module.exports = new AuthController()