const router = require('express').Router()

const Location = new require('../models/location.model')
const controller = require('../controllers/location.controller')

const parseSchema = require('../middlewares/parseSchema')
const locationExist = require('../middlewares/locationExist')
const adminTokenValidation = require('../middlewares/adminTokenValidation')

router.post('/', [parseSchema(Location.UploadSchema), adminTokenValidation], controller.post)
router.get('/many/:name', [locationExist], controller.getMany)
router.get('/:name', controller.get)
router.put('/:name', [parseSchema(Location.UpdateSchema), adminTokenValidation, locationExist], controller.put)
router.delete('/:name', [adminTokenValidation, locationExist], controller.delet)

module.exports = router