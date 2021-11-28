const http = require('http')
const {requestListener} = require('./utils/requestListener')
const port = process.env.PORT || 3000

const server = http.createServer(requestListener)

server.listen(port, () => {
    console.log(`server started on port ${port}; 🚀🚀🚀 \npress Ctrl-C to terminate....` )
})

module.exports.server = server