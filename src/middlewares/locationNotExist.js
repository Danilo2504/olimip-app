const User = require('../models/location.model')

module.exports = async (req = request, res = response, next) => {
    const {name} = req.body

    const location = new location({name})

    const locationFinded = await user.find()

    if(locationFinded) return res.status(404).json({error: "Location already exist."})
    next()
}