# Simple HTTP web server by nodeJS 

## Logging ability is added

In these workfiles, I establish the basic implementation for the Getir Bootcamp assignment Week 2, logging is served by nodeJS `bunyan` module and `fs` module.

### Setup

The only Node module dependency is (`bunyan`).  These dependencies are listed in the package.json file. However, when you first clone this repo, you won't have them installed.  To install them, simply run:

```
npm install or yarn install
```
Then type:

```
npm start

```

Then try the following URLs:

* http://localhost:3000
* http://localhost:3000/about
* http://localhost:3000/communications

### In case you have problem with installing bunyan

```
npm install -g bunyan

```

### RUNNING TESTS

Test modules `chai` and `mocha` are installed as developer dependency.
* Test case1 examines correct response status code.
* Test case2 examines whether a record inside log files exists or not.
```
npm test

```

If you want to avoid installing test module

```
npm install --production

```


### LOG FILES

This example adds log files received from client requests under the log_files directory.
Logging is achieved via built-in node module called (`bunyan`) and manually by (`fs`)

* For the implementation detail, please follow my article on medium.

https://medium.com/@fatihkaya13/elegant-way-to-log-each-request-and-response-for-your-nodejs-http-server-with-bunyan-module-5995cd1d40c4

## THANK YOU FOR REVIEWING MY REPOSITORY ❤️❤️❤️
## FATIH KAYA


