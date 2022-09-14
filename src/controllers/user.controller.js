const User = require('../models/user.model')

const get = async (req = request, res = response) =>{
    const {name} = req.params

    const user = new User({name})

    const userFinded = await user.find()

    res.status(200).json({
        name: userFind.name
    })
}

const delet = async (req = request, res = response) =>{
    const {name} = req.params

    const user = new User({name})

    const userDeleted = await user.delete({name})

    res.status(200).json(userDeleted)
}

const put = async (req = request, res = response) =>{
    const {name} = req.params

    const user = new User({name})

    await user.update(req.body)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json({
                error
            })
        })
}

module.exports = {
    get, delet, put
}