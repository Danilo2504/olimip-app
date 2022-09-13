const User = require('../models/user.model')
const {genToken, getToken, expiredToken} = require('../helpers/jwt')

module.exports = async (req = request, res = response, next) => {
    const token = req.header('Authorization')

    if(await expiredToken(token)) return res.status(400).json({error: 'Token expired - tokenMiddleware'})

    if(!token) return res.status(401).json({error: 'Unknow token.'})

    const user = await user.findBy({id: getToken(token).id})

    try {
        if(getToken(token).role === "USER") return res.status(401).json({error: "Invalid admin authorization token."})
    } catch (error) {
        return res.status(401).json({error: "Error admin authorization token."})
    }

    next()
}