import fs from 'fs'
import path from 'path'
import _ from 'lodash'
const __dirname = path.resolve()

export const getRegions = (req, res) => {
    const fileUrl = !req.query.type && !req.query.code 
                    ? `${__dirname}/public/assets/data/json/region.json`
                    : `${__dirname}/public/assets/data/json/${req.query.type}/${req.query.code}.json`
    fs.readFile(fileUrl, 'utf8', (err, jsonString) => {
        if (err) {
            console.log("Error reading file from disk:", err)
            res.status(500).json('Error reading file from disk:' + err)
        }
        try {
            const data = JSON.parse(jsonString)
            const originalData = Object.values(data)
            const result = _.map(originalData, (item) => {
                return {
                    value: item.code,
                    label: item.name_with_type
                }
            })
            console.log("Region data: ", result)
            res.status(200).json(result)
        } catch(err) {
            console.log('Error parsing JSON string:', err)
            res.status(500).json('Error parsing JSON string:'+ err)
        }
    })
}