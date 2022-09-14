const router = require('express').Router()

const controller = require('../controllers/user.controller')

const nameExist = require('../middlewares/nameExist')
const encryptPassword = require('../middlewares/encryptPassword')
const tokenValidation = require('../middlewares/tokenValidation')
const {parseSchema, UpdateUserSchema} = require('../middlewares/zodValidation')

router.get('/:name', [nameExist], controller.get)
router.delete('/:name', [nameExist, tokenValidation], controller.delet)
router.put('/:name', [parseSchema(UpdateUserSchema), nameExist, tokenValidation, encryptPassword], controller.put)

module.exports = router