http = require('http')
const chai = require('chai')
const path = require('path')
const fs = require('fs')
const util = require('util')
const assert = require('assert')
const { expect } = chai

const server = require('./server')
const fsReadFile = util.promisify(fs.readFile)


// send mock header
const headers = {host: 'test machine', 'sec-ch-ua-platform': 'send by test suite'}

// make sure log files are empty by overriding the file with ''
const writeStreamForBunyan = fs.createWriteStream('log_files/bunyan-logs.log', 'UTF-8')
writeStreamForBunyan.write('')
const writeStreamForFS = fs.createWriteStream('log_files/fs-logs.log', 'UTF-8')
writeStreamForFS.write('')

// TEST CASE 1

describe('/... FOLLOWING PATHS SHOULD SEND CORRECT RESPONSE STATUS CODE', function () {

    it('/ should return 200', function (done) {
    http.get('http://localhost:3000', {
        headers: headers
    }, function (res) {
        assert.equal(200, res.statusCode);
        done()
     })
    })

    it('/about should return 200', function (done) {
    http.get('http://localhost:3000/about', {
        headers: headers
    }, function (res) {
        assert.equal(200, res.statusCode);
        done();
     })
    })

    it('/about? should return 200', function (done) {
    http.get('http://localhost:3000/about?', {
        headers: headers
    }, function (res) {
        assert.equal(200, res.statusCode);
        done();
     })
    })

    it('/communication should return 200', function (done) {
    http.get('http://localhost:3000/communication', {
        headers: headers
    }, function (res) {
        assert.equal(200, res.statusCode);
        done();
     })
    })

    it('/nopath should return 404', function (done) {
    http.get('http://localhost:3000/nopath', {
        headers: headers
    }, function (res) {
        assert.equal(404, res.statusCode);
        done();
     })
    })
});

// TEST CASE 2 

/*
 since files are empty and http calls will log each request
 reading file for each test after running another test is safe
*/

describe('IT SHOULD FIND RECORD IN EACH LOG FILE', function async( ) {

    it('fs-logs file shoud have a record', async () => {
        const filepath = path.resolve(`${__dirname}/log_files/fs-logs.log`);
        const record = await fsReadFile(filepath);
        expect(record).to.be.not.empty
    })

    it('bunyan-logs file shoud have a record', async () => {
        const filepath = path.resolve(`${__dirname}/log_files/bunyan-logs.log`);
        const record = await fsReadFile(filepath);
        expect(record).to.be.not.empty;
    })

})


