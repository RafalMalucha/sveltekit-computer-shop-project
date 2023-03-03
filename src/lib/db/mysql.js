import mysql from 'mysql';

export var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dupa13",
  database: "base"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
