const User = require('../models/user.model')

module.exports = async (req = request, res = response, next) => {
    const {name} = req.body

    const user = new User({name})

    const find = await user.find()

    if(find && find.verified) return res.status(404).json({error: "Name already exist."})
    next()
}