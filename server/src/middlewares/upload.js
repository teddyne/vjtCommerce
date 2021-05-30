import util from 'util'
import path from 'path'
import multer from 'multer'
const __dirname = path.resolve()

var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(`${__dirname}/public/static/assets/uploads`))
  },
  filename: (req, file, callback) => {
    const match = ["image/png", "image/jpeg"]

    if (match.indexOf(file.mimetype) === -1) {
      var message = `<strong>${file.originalname}</strong> is invalid. Only accept png/jpeg.`
      return callback(message, null)
    }

    var filename = `${file.originalname}`
    callback(null, filename)
  }
})

var uploadFiles = multer({ storage: storage }).array("files", 10)
var uploadFilesMiddleware = util.promisify(uploadFiles)
export default uploadFilesMiddleware