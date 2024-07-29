const authRouter = require('./auth.route')

function routing(app) {
  app.use('/auth', authRouter)
}

module.exports = routing