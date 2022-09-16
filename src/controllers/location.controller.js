const Location = new require('../models/location.model')

const post = async (req = request, res = response) => {
    try {
        const location = await Location.upload(req.body)

        res.status(201).json(location)
    } catch (error) {
        res.status(500).json({error})
    }
}

const get = async (req = request, res = response) => {
    try {
        const {name} = req.params

        const location = await Location.getByName(name)

        res.status(200).json(location)
    } catch (error) {
        res.status(500).json({error})
    }
}

const getMany = async (req = request, res = response) => {
    try {
        const {name} = req.params

        const locations = await Location.getManyByName(name)

        res.status(200).json(locations)
    } catch (error) {
        res.status(500).json({error})
    }
}

const getAll = async (req = request, res = response) => {
    try {
        const locations = await Location.getAll()

        res.status(200).json(locations)
    } catch (error) {
        res.status(500).json({error})
    }
}

const delet = async (req = request, res = response) => {
    try {
        const {name} = req.params

        const location = await Location.deletByName(name)

        res.status(200).json(location)
    } catch (error) {
        res.status(500).json({error})
    }
}

const put = async (req = request, res = response) => {
    try {
        const {name} = req.params
        const location = await Location.updateByUsername(name, req.body)

        res.status(200).json(location)
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = {
    post,
    get,
    getMany,
    getAll,
    delet,
    put
}