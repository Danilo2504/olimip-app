const router = require('express').Router()

const Location = new require('../models/location.model')
const controller = require('../controllers/location.controller')

const parseSchema = require('../middlewares/parseSchema')
const locationExist = require('../middlewares/locationExist')
const adminTokenValidation = require('../middlewares/adminTokenValidation')
const multerFiles = require('../middlewares/multerFiles')

router.post('/', [adminTokenValidation, multerFiles, parseSchema(Location.UploadSchema)], controller.post)
router.get('/many/:name', controller.getMany)
router.get('/all', controller.getAll)
router.get('/:name', [locationExist], controller.get)
router.put('/:name', [adminTokenValidation, parseSchema(Location.UpdateSchema), locationExist], controller.put)
router.delete('/:name', [adminTokenValidation, locationExist], controller.delet)

module.exports = router