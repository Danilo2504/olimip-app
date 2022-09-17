const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file.fieldname == 'image') cb(null, 'public/uploads/images')
    },
    filename: (req, file, cb) => {
        // cb(null, `${Date.now()}-${file.originalname}`)
        // cb(null, `${req.body.name + path.extname(file.originalname)}`)
        cb(null, `${req.body.name}`)
    }
})

module.exports = multer({
    storage,
    limits: {fileSize: 1000000}
}).fields([{
    name: 'image', maxCount: 1
}])
