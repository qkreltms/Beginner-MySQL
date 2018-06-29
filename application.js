const express = require('express')
const jade = require('jade')
var app = express()
app.set('view engine', 'pug');

var mysql = require('mysql');
var connection = mysql.createConnection({host: 'localhost', user: 'root', password: '111111', database: 'o2'});
connection.connect();

app.route(['/topic', '/topic/:id']).get((req, res) => {
  var id = req.params.id
  if (id) {
    let sql = 'select * from topic where id=?'
    connection.query(sql, [id], (err, topics, fields) => {
      if (err)
        return console.error(err)
      res.render('view', {topics: topics, topic:topics[0]})
    })
  } else {
    let sql = 'select id, title from topic'
    connection.query(sql, (err, topics, fields) => {
      res.render('view', {topics: topics})
    })
  }
})

app.listen(4000, function() {
  console.log('Example app listening on port 4000!');
});
