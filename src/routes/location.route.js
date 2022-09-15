const router = require('express').Router()

const Location = new require('../models/location.model')
const controller = require('../controllers/location.controller')

const parseSchema = require('../middlewares/parseSchema')
const locationExist = require('../middlewares/locationExist')

router.post('/', [parseSchema(Location.UploadSchema)], controller.post)
router.get('/many/:name', [locationExist], controller.getMany)
router.get('/:name', controller.get)
router.put('/:name', [parseSchema(Location.UpdateSchema), locationExist], controller.put)
router.delete('/:name', [locationExist], controller.delet)

module.exports = router