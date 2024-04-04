const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const mysql = require('mysql2')

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "school"
// });

// const db = mysql.createConnection({
//   host: "103.171.180.10",
//   connectTimeout: 50000,
//   port: 3306,
//   user: "jeelaka1_quadone",
//   password: "Quad@0208",
//   database: "jeelaka1_school"
// });

// db.connect((error)=>{
//   if(error){
//     console.log(error);
//   }else{
//     console.log("successfully Connected to DB");
//   }
// });

const db = mysql.createPool({
  host: "sql6.freemysqlhosting.net",
  // connectTimeout: 30000,
  port: 3306,
  user: "sql6696563",
  password: "fYE39h64WP",
  database: "sql6696563",
  // debug: true
});



db.getConnection((error)=>{
  if(error){
    console.log(error);
  }else{
    console.log("successfully Connected to DB");
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

app.get("/api/students", (req, res) => {
    var sql = "SELECT * FROM students";
    db.query(sql, function (error, result) {
      if(error){
        console.log("Error Connecting to DB");
      }else{
        res.send({ status: true, data: result });
      }
    });
  });