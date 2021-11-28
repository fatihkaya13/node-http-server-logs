const {sendStaticFile} = require('./sendStaticFile')
const {bunyanLog} = require('./bunyan_logger')
const {fsLog} = require('./fs_logger')

const requestListener = (req, res) => {

    const path = cleanUrlPath(req)

    // send each static HTML files by path
    renderPage(path, res)

    // log each request to specified file by "bunyan" module
    bunyanLog.info({formattedRequest: req, formattedResponse: res}, 'LOG HAS BEEN CREATED')

    // log each request to spedicifed file by fs module
    fsLog(req)

}

// remove trailing commas, question marks
// e.g. about? returns about
// e.g. about\ returns about
const cleanUrlPath = req => req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()

const renderPage = (path, res) => {
    switch(path) {
        case '':
            sendStaticFile(res, '/public/home.html', 'text/html')
            break
        case '/about':
            sendStaticFile(res, '/public/about.html', 'text/html')
            break
        case '/communication':
            sendStaticFile(res, '/public/communication.html', 'text/html')
            break
        default:
            sendStaticFile(res, '/public/error.html', 'text/html', 404)
            break
    }
}

module.exports.requestListener = requestListener


