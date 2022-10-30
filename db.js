const mysql = require('mysql2')
require('dotenv').config()

const conn = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    dateStrings:true

    //database:process.env.DBNAME
})

conn.connect((err)=>{
    if(err){
        console.log(err)
    }else{
    
        console.log('DB connected')
    }
})

module.exports = conn