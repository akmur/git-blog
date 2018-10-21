var express = require('express')
var app = express()

app.use(express.static(__dirname + '/dist/'));
app.use("/js", express.static(__dirname + "/dist/"));
app.use("/css", express.static(__dirname + "/dist/"));

app.get('*', function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(3000, (err) => {
  if (err) throw err
  console.log('> Ready on http://localhost:3000')
})

module.exports = app;
