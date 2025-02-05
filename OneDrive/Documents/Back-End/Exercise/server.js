const http = require('http');
const moment = require('moment');
const users = require('./users'); 

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    const url = req.url;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is the home page');
    }
    else if (url === '/about') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            status: 'success',
            message: 'response success',
            description: 'Exercise #02',
            date: moment().format() 
        }));
    } 
    else if (url === '/users') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users));
    } 
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
    }
});

server.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});