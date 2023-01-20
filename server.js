const express = require('express')
const app = express();
const cors = require('cors');
const mysql = require('mysql');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"wpt"
})

db.connect((err) => {
    if(err) throw err;
    console.log("Database connected");
})

app.use(cors('*'));


app.get('/',(req,resp) => {
    let sql="select * from employee";
    db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result)
        resp.send(result);
    })
})

app.get('/login/:id/:fname',(req,resp) => {
    let sql=`select * from employee where id = ${req.params.id} and fname = ${req.params.fname}`;
    db.query(sql,(err,result) => {
        if(err) throw err;
        if(result==null)
        {
            resp.send("Wrong Credentials")
        }
        else{
            console.log(result)
            resp.send(result);
        }
    })
})

app.listen(4000, () => {
    console.log("server started at port 4000");
});