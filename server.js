var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(3000);

console.log('Listening on port 3000');
