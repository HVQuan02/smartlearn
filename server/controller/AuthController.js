class AuthController {
  index(req, res) {
    res.send('Hello')
  }
}

module.exports = new AuthController()