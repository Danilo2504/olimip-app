const User = require('../models/user.model')
const {genToken, getToken, expiredToken} = require('../helpers/jwt')

module.exports = async (req = request, res = response, next) => {
    const token = req.header('Authorization')

    if(await expiredToken(token)) return res.status(400).json({error: 'Token expired - tokenMiddleware'})

    if(!token) return res.status(401).json({error: 'Unknow token.'})

    const {name} = req.params

    const user = new User({name})
    const find = await user.find()

    try {
        if(getToken(token).id != find.id) return res.status(401).json({error: "Invalid authorization token."})
    } catch (error) {
        return res.status(401).json({error: "Error authorization token."})
    }

    next()
}