const User = require('../models/user.model')

module.exports = async (req = request, res = response, next) => {
    const {id} = req.params

    const user = new User()

    const userFinded = await user.findBy({id})

    if(!userFinded) return res.status(404).json({error: "Invalid user ID."})
    next()
}