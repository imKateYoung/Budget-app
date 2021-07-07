const sql = require('mssql');
var express = require('express')
const app = express();
const PORT = 8000

const sqlConfig= {
    username: 'test',
    password: '1200',
    database: '',
    requestTimeout: 10000
}

app.get('/',function(req,res){
    let connection = sql.connect(sqlConfig, (err) => {
        if (err) {
            console.log(err)
        } else {
            res.send('DB Connected');
            //code for sql request here.
            console.log(res)
        }
    })
})

app.listen(PORT, function () {
    console.log(`Server started at ${PORT}`)
})