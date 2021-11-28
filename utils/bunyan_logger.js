const bunyan = require('bunyan');
const path = require('path');
const LOGNAME = 'REQUESTS'

const reqSerializer = req => {
    return {
        method: req.method,
        url: req.url,
        host: req.headers.host,
        // remove double quotes from string
        platform: req.headers['sec-ch-ua-platform'].replace(/"/g,'')
    };
}

const resSerializer = res => {
    return {
        statusCode: res.statusCode
    }
  }
  

const logFileLocation = path.join(__dirname, '../log_files/bunyan-logs.log')

const bunyanLog = bunyan.createLogger({
    name: LOGNAME,
    serializers: {formattedRequest: reqSerializer, formattedResponse: resSerializer},
    streams: [{
        path: logFileLocation,
    }]
});

module.exports.bunyanLog = bunyanLog
