var express = require('express'),
    path = require('path'),
    yabe = require('./core/yabe'),
    port = process.env.PORT || 3000,
    host = process.env.HOST || '127.0.0.1';

var app = express();
app.use(express.static(path.join(__dirname, '../client')));

// Anyway, no security concern
app.use(function (req, res, next) {    
    res.setHeader('Access-Control-Allow-Origin', '*');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');    
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

// yabe api middleware
app.get('/items/:keywords', yabe.findItemsByKeywords);

app.listen(port, host);

console.log('Listening on port ' + port);