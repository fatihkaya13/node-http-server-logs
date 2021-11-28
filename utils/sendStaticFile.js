const fs = require('fs')
const path = require('path')

const sendStaticFile = (res, pathByRequest, contentType, responseCode = 200) => {

    fileLocation = path.join(__dirname, `../${pathByRequest}`)

    fs.readFile(fileLocation, (err, data) => {
      if(err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        return res.end('500 - Internal Server Error Occurred')
      }
      res.writeHead(responseCode, { 'Content-Type': contentType })
      res.end(data)
    })
}

module.exports.sendStaticFile = sendStaticFile