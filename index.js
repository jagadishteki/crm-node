const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const mysql = require('mysql')

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

const db = mysql.createConnection({
  host: "103.171.180.10",
  user: "jeelaka1_quadone",
  password: "Quad@0208",
  database: "jeelaka1_school"
});

db.connect((error)=>{
    if(error){
      console.log("Error Connecting to DB");
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