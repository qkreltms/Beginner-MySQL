var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111111',
  database : 'o2'
});
connection.connect();
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
connection.query("select * from topic", (err, rows, fields) => {
  if(err) console.error(err);
  else {
    for(let i=0; i<rows.length; i++) {
      // console.log(rows[i].title)
    }
  }
})

connection.query('insert into topic(title, description, author) values("node", "serverside", "ph.d pjh")', (err, rows, field) => {
  if(err) console.error(err);
  else {
    for(let i=0; i<rows.length; i++) {
      // console.log(rows.title)
    }
  }
})

connection.query('insert into topic(title, description, author) values(?, ?, ?)', ["node2", "serverside2", "ph.d pjh"], (err, rows, field) => {
  if(err) console.error(err);
  else {
    for(let i=0; i<rows.length; i++) {
      // console.log(rows.title)
    }
  }
})

connection.query('update topic set title=?, author=? where id=?', ["node3", "serverside3", 1], (err, rows, field) => {
  if(err) console.error(err);
  else {
    console.log(rows)
  }
})

connection.query('delete from topic where id=?', [2], (err, rows, field) => {
  if(err) console.error(err);
  else {
    console.log(rows)
  }
})

connection.end();
