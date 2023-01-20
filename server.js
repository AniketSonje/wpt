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


app.get('/insertdata', (req, res) => {
    let sql = 'insert into account values(5,"f","aniket","kon","Mumbai");'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('inserted data....')
    });
});


app.get('/search/:id', (req, res) => {
    let sql = `SELECT * FROM account where id=${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});


app.get('/updateaddr/:id/:address', (req, res) => {
    let sql = `update account set address = ${req.params.address} where id =${req.params.id}`;
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});

app.listen(4000, () => {
    console.log("server started at port 4000");
});
