const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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
      res.json({ msg: 'User created successfully!' })
    }
    catch(err) {
      res.status(500).json({ err })
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
          const token = jwt.sign({ uid: user._id }, process.env.JWT_KEY, { expiresIn: '1h' })
          res.json({ msg: 'User signed in successfully!', token })
        }
        else {
          res.status(401).json({ msg: 'Incorrect password!' })
        }
      }
      else {
        res.status(500).json({ msg: 'User does not exist!' })
      }
    }
    catch(err) {
      res.status(500).json({ err })
    }
  }
}

module.exports = new AuthController()