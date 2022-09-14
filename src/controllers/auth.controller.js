const User = require('../models/user.model')
const {genToken, getToken} = require('../helpers/jwt')
const sendEmail = require('../helpers/sendEmail')
const randtoken = require('rand-token')

const html = require('../helpers/html')

const login = async (req = request, res = response) => {
    const {namemail, password} = req.body
    let email
    let name
    if(namemail.includes('@')) email = namemail
    else name = namemail

    const user = new User({name, email, password})

    await user.login()
        .then(async result => {
            const token = await genToken({id: result.id}, '30d')
            res.status(200).json({token})
        })
        .catch(error => {
            res.status(400).json({error: "Incorrect email or password"})
        })
}

const register = async (req = request, res = response) => {
    const {name, email, password} = req.body

    const user = new User({name, email, password})

    const userEmailFind = await user.findBy({email})
    const userNameFind = await user.findBy({name})

    if(!userEmailFind && !userNameFind) await user.save()

    const jwtToken = await genToken({name, email, password}, '3h')

    await sendEmail({
        email,
        service: 'gmail',
        from: 'Puntos Culturales',
        subject: 'Confirmar cuenta - Puntos Culturales',
        html: html(process.env.URL, jwtToken)
    })

    res.status(200).json({msg: 'Please confirm account in your email'})
}

const confirm = async (req = request, res = response) => {
    const {name, email, password} = await getToken(req.query.token);

    console.log(await getToken(req.query.token));

    const user = new User({email})

    if(!email) return res.status(400).json({error: 'Invalidad token'})

    await user.update({name, password, verified: true})

    res.send("<script>window.close();</script>")
}

const find = async (req = request, res = response) => {
    const id = await getToken(req.header('Authorization')).id

    const user = await new User().findBy({id: id})

    return res.status(200).json({
        name: user.name,
        role: user.role
    })
}

module.exports = {
    login,
    register,
    confirm,
    find
}