const {expiredToken} = require('../helpers/jwt')

module.exports = async (req = request, res = response, next) => {
    const token = req.query.token

    if(await expiredToken(token)) return res.status(400).json({error: 'Token expired-Confirm'})

    next()
}