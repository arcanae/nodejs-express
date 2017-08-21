let express = require('express');
let hello = express();

hello.use(function(req, res) {
    res.status(404).send("cz");
    // res.status(404).send(hello.use(express.static('./404.html')));
});

hello.get('/', function(req, res) {
    res.send('Hello World!');
});

hello.get('/toto', function(req, res) {
    res.send('Hello toto');
});

hello.use('/test', express.static('./'));


hello.listen(2121, function() {
    console.log('Example app listening on port 2121!');
});