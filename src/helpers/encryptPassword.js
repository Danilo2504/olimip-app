const bcrypt = require('bcryptjs')

module.exports = async password => await bcrypt.hashSync(password, bcrypt.genSaltSync(10))