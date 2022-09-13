const User = require('../models/user.model')

module.exports = async (req = request, res = response, next) => {
    const {email} = req.body

    const user = new User({email})

    const find = await user.find()

    if(find && find.verified) return res.status(400).json({error: "Email already used."})
    next()
}