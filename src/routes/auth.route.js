const router = require('express').Router()

const controller = require('../controllers/auth.controller')

const userExist = require('../middlewares/userExist')
const nameNotExist = require('../middlewares/nameNotExist')
const emailNotExist = require('../middlewares/emailNotExist')
const getTokenExpired = require('../middlewares/getTokenExpired')
const encryptPassword = require('../middlewares/encryptPassword')
const {parseSchema, LoginSchema, RegisterSchema} = require('../middlewares/zodValidation')

router.post('/login', [parseSchema(LoginSchema), userExist], controller.login)
router.post('/register', [parseSchema(RegisterSchema), nameNotExist, emailNotExist, encryptPassword], controller.register)
router.get('/confirm', [getTokenExpired], controller.confirm)

module.exports = router