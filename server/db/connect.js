const mongoose = require('mongoose')

async function connectToDB() {
  try {
    await mongoose.connect(process.env.ATLAS_URI)
    console.log('Connect to MongoDB successfully!')
  }
  catch (err) {
    console.error(err)
  }
}

module.exports = connectToDB