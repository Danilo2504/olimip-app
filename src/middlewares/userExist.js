const User = require('../models/user.model')

module.exports = async (req = request, res = response, next) => {
    const {namemail} = req.body

    let email
    let name
    if(namemail.includes('@')) email = namemail
    else name = namemail

    const user = new User({name, email})

    const find = await user.find()

    if(!find) return res.status(404).json({error: "Incorrect name, email or password."})

    if(!find.verified) return res.status(404).json({error: "Please confirm your account."})

    next()
}