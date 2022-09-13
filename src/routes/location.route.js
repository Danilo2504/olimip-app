const router = require('express').Router()

const controller = require('../controllers/location.controller')
const multerFiles = require('../middlewares/multerFiles')

// const locationExist = require('../middlewares/locationExist')
const locationNotExist = require('../middlewares/locationNotExist')
const adminValidation = require('../middlewares/adminValidation')
// const {parseSchema, CreateDatapackSchema, FindDatapackSchema, UpdateDatapackSchema} = require('../middlewares/zodValidation')

router.post('/', [adminValidation, locationNotExist, multerFiles], controller.post)
router.post('/getMany/:name', [], controller.getMany)
router.get('/:name', [], controller.get)
router.delete('/:name', [], controller.delet)
router.put('/:name', [], controller.put)

module.exports = router