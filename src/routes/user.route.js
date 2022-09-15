const router = require('express').Router()

const User = new require('../models/user.model')
const controller = require('../controllers/user.controller')

const parseSchema = require('../middlewares/parseSchema')
const encryptPassword = require('../middlewares/encryptPassword')
const register = require('../middlewares/register')
const login = require('../middlewares/login')
const usernameExist = require('../middlewares/usernameExist')
const tokenValidation = require('../middlewares/tokenValidation')

router.post('/register', [parseSchema(User.RegisterSchema), encryptPassword, register], controller.register)
router.get('/confirm/:token', [], controller.confirm)
router.get('/id/:id', [], controller.getById)
router.post('/login', [parseSchema(User.LoginSchema), login], controller.login)

router.get('/:username', [usernameExist, tokenValidation], controller.get)
router.delete('/:username', [usernameExist, tokenValidation], controller.delet)
router.put('/:username', [usernameExist, parseSchema(User.UpdateSchema), tokenValidation, encryptPassword], controller.put)

module.exports = router