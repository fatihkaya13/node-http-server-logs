const fs = require('fs')
const path = require('path')
const logFileLocation = path.join(__dirname, '../log_files/fs-logs.log')

const fsLog = req => {

    const {method, url } = req
    const {host} = req.headers
    // remove double quotes from string
    const platform = req.headers['sec-ch-ua-platform'].replace(/"/g,'')
    const date = new Date().toISOString()

    const requestData = {
        method: method,
        url: url,
        host: host,
        platform: platform,
        date: date
    }

    fs.appendFile(logFileLocation, `${ JSON.stringify(requestData) }\n`, err => {
        if (err) {
            throw err
        }
    })
}

module.exports.fsLog = fsLog
