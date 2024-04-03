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
  host: "sql302.infinityfree.com",
  user: "if0_36254526",
  password: "Teki@1976",
  database: "if0_36254526_school"
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