const bcrypt = require('bcrypt')
const User = require('../models/User')

class AuthController {
  // [GET] /auth/
  index(req, res) {
    res.send('Auth is on ...')
  }

  // [POST] /auth/sign-up
  async signUp(req, res) {
    try {
      const saltRounds = 11
      req.body.password = await bcrypt.hash(req.body.password, saltRounds)
      await User.create(req.body)
      res.send('User created successfully!')
    }
    catch(err) {
      res.status(500).send(err)
    }
  }

  // [POST] /auth/sign-in
  async signIn(req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ email })
      if (user) {
        const isValidPw = await bcrypt.compare(password, user.password)
        if (isValidPw) {
          res.send('User signed in successfully!')
        }
        else {
          res.send('Incorrect password!')
        }
      }
      else {
        res.send('User does not exist!')
      }
    }
    catch(err) {
      res.status(500).send(err)
    }
  }
}

module.exports = new AuthController()