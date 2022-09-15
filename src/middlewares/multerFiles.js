const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file.fieldname == 'image') cb(null, 'public/uploads/images')
        if(file.fieldname == 'datapack') cb(null, 'public/uploads/datapacks')
        if(file.fieldname == 'resourcepack') cb(null, 'public/uploads/resourcepacks')
    },
    filename: (req, file, cb) => {
        // cb(null, `${Date.now()}-${file.originalname}`)
        cb(null, `${req.body.title + path.extname(file.originalname)}`)
    }
})

module.exports = multer({
    storage,
    limits: {fileSize: 1000000}
}).fields([{
    name: 'image', maxCount: 5
},{
    name: 'datapack', maxCount: 1
},{
    name: 'resourcepack', maxCount: 1
}])
