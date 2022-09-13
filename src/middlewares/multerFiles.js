const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file.fieldname == 'images') cb(null, 'public/uploads/images')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

module.exports = multer({
    storage,
    limits: {fileSize: 1000000}
}).fields([{
    name: 'images', maxCount: 5
}])
