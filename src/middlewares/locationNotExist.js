const Location = require('../models/location.model')

module.exports = async (req = request, res = response, next) => {
    const {name} = req.params

    const locationByName = await Location.getByName(name)
    if(locationByName) return res.status(400).json({error: 'Name already exist'})

    next()
}