const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

var multerConfig = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + "." + file.originalname)
    }
});

var multerMiddleware = multer({ storage: multerConfig });

module.exports = multerMiddleware;