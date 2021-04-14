import uploadFilesMiddleware from '../middlewares/upload.js'
import path from 'path'
const __dirname = path.resolve()
import _ from 'lodash'
const host = 'http://localhost:5000'

export const multipleUpload = async (req, res) => {
    try {
         await uploadFilesMiddleware(req, res)
         console.log(req.files)

         if (req.files.length <= 0) {
            return res.send(`You must select at least 1 file.`)
         }
        let result = null
        if (req.files.length > 1) {
          result = {
            "urls": _.map(req.files, file => `${host}/api/files/${file.originalname}`)
          }
        } else {
          result = {
            "url": `${host}/api/files/${req.files[0].originalname}`
          }
        }
        res.status(200).json(result)
    } catch(error) {
        console.log(error)

        if (error.code === "LIMIT_UNEXPECTED_FILE") {
          return res.send("Too many files to upload.")
        }
        return res.send(`Error when trying upload many files: ${error}`)
    }
}

export const download = (req, res) => {
  const fileName = req.params.name
  const directoryPath = __dirname + '/public/assets/uploads/'

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      })
    }
  })
}