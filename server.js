var express = require('express')
var app = express()

app.use(express.static(__dirname + '/dist/'));
app.use("/js", express.static(__dirname + "/dist/"));
app.use("/css", express.static(__dirname + "/dist/"));

app.get('*', function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, (err) => {
  if (err) throw err
  console.log('> Ready on http://localhost:8000')
})

module.exports = app;
