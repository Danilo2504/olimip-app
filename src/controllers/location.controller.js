const Location = require('../models/location.model')

const post = async (req = request, res = response) => {
    // res.status(200).json({data: "File send"})
    const params = req.body

    const location = new Location(params)

    const newLocation = await location.save()

    res.status(200).json(newLocation)
}

const get = async (req = request, res = response) =>{
    const {name} = req.query

    const location = new Location({name})

    const locationFinded = await location.find()

    res.status(200).json(locationFinded)
}

const delet = async (req = request, res = response) =>{
    const {name} = req.query

    const location = new Location({name})

    const locationDeleted = await location.find()

    res.status(200).json(locationDeleted)
}

const put = async (req = request, res = response) =>{
    const {name} = req.query
    const {desc, ubication,} = req.body
    const newName = req.body.name

    const location = new Location({name})

    await location.update({name: newName, desc, ubication})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json({
                error
            })
        })
}

const getMany = async (req = request, res = response) =>{
    const {name} = req.query

    const location = new Location({name})

    const locationsFinded = await location.getMany()

    res.status(200).json(locationsFinded)
}

module.exports = {
    post, get, delet, put, getMany
}