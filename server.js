var express = require("express");
var app = express();

app.set('port', (process.env.port || 3000));

app.use('/', express.static(__dirname));

app.listen(app.get('port'), () => {
    console.log("Server started: http://localhost:" + app.get('port') + '/');
});