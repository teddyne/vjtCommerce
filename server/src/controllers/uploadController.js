import uploadFilesMiddleware from '../middlewares/upload.js'
import path from 'path'
const __dirname = path.resolve()

export const multipleUpload = async (req, res) => {
    try {
         await uploadFilesMiddleware(req, res)
         console.log(req.files)

         if (req.files.length <= 0) {
            return res.send(`You must select at least 1 file.`)
          }
      
          //return res.send(`Files has been uploaded.`)
          const result = {
            "url": "http://localhost:5000/api/files/1616645910369-Capture.JPG"
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
  const fileName = req.params.name;
  const directoryPath = __dirname + "/public/static/assets/uploads/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      })
    }
  })
}