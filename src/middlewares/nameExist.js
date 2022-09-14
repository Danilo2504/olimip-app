const User = require('../models/user.model')

module.exports = async (req = request, res = response, next) => {
    const {name} = req.params

    const user = new User({name})

    const userFinded = await user.find()

    console.log("Userfiasbd");

    if(!userFinded) return res.status(404).json({error: "Name not found."})
    next()
}