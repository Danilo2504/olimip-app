const jwt = require('jsonwebtoken')

const genToken = (payload, expiresIn) => {
    try {
        return jwt.sign(payload, process.env.secret_key, {expiresIn})
    } catch (error) {
        return error
    }
}

const getToken = token => {
    try {
        return jwt.verify(token, process.env.secret_key)
    } catch (error) {
        return error
    }
}

const expiredToken = async token => {
    try {
        const resToken = await getToken(token)
        if (Date.now() >= resToken.exp * 1000) {
            return true
        }
        return false
    } catch (error) {
        return error
    }
}

module.exports = {
    genToken,
    getToken,
    expiredToken
}