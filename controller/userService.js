const conn = require("../db")
const bcrypt = require("bcrypt");
//const validator = require('../utils/validators')
const { json } = require("express");

module.exports.getUserData = async (req,res,next)=>{

    const userId = req.params.id

    console.log(userId)

    const query = `SELECT * FROM Benutzer where idBenutzer = ${userId}`

    try{

        conn.query(query,(err,result)=>{
        
            if(err){
                console.log("error : ",err)
                next(err)
                res.json(err)
            }
    
            if(result){
                res.json(result)
            }
            else{
                console.log("there is not such user ")
                res.json(null)
            }
        })

    }catch(err){
        console.log("error",err)
    }
    
}

/* module.exports.setUserData = async (req,res,next)=>{

const id = req.params.id
if(!id){
    res.json({"data":"there is not any user!"})
}

const query0 = `SELECT * from Benutzer where idBenutzer= "${id}";`

//console.log(query)

const user = conn.query(query0,async (err,result)=>{

    if (err) {
        console.log("error at login");
        next(err);
        res.json(err);
    }

    if (result) {
        console.log(result)

        const email = req.body.email ? req.body.email : result.email
        const name = req.body.name ? req.body.name : result.name
        const vorname = req.body.vorname ? req.body.vorname : result.vorname
        const password = req.body.password ? req.body.password : result.password
        let geburtsdatum = req.body.geburtsdatum ? req.body.geburtsdatum : result.geburtsdatum
        const geschlecht = req.body.geschlecht ? req.body.geschlecht : result.geschlecht
    
        const hashedPassword = await bcrypt.hash(password, 10);
        //geburtsdatum = geburtsdatum.slice(0,10)
        //geburtsdatum = geburtsdatum.split("-")
        //geburtsdatum = geburtsdatum.reverse()
        //geburtsdatum = geburtsdatum.join('-')

        let date = new Date(geburtsdatum)
        //console.log(date)
        //console.log(date.slice(0,10))
        //date = date.slice(0,10)
        //date = date.replace('/','-')
        //date = date.toISOString().slice(0, 19).replace('T', ' ');

        // date = date.slice(0,10)
        //date = new Date(1667086277);
        // console.log(typeof(date),date)

        //console.log(geburtsdatum.slice(0,10))CAST('2019-09-25' AS DATETIME)
        //console.log(typeof(geburtsdatum))
        //2030-05-20
        
        //const query = `UPDATE Benutzer SET idBenutzer=?, Email=?, name=?, vorname=?, geschlecht= ?, password=?, geburtsdatum= ? WHERE idBenutzer = ?;`SELECT CAST("2017-08-29" AS DATE);
        
        
        const query = `UPDATE Benutzer SET idBenutzer=${id}, Email='${email}', name='${name}', vorname='${vorname}', geschlecht= '${geschlecht}', password='${hashedPassword}' WHERE idBenutzer = ${id};`
    
        conn.query(query,(err,result1)=>{
    
            if(err){
                console.log("error at setUserData")
                //next(err)
                res.send(err)
            }
    
            if(result1){
                res.send(res)
            }
            else{
                console.log("result length is null at setUserData")
            }
        })   

    }
    else {
        console.log("result length is null at login");
    }
})
} */

module.exports.register = async(req,res,next)=>{

    const data = req.body

    console.log(req.body)

    if(!data){
        res.json({"data":"there is not any data!"})
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const query = `INSERT INTO Benutzer (email,vorname,name,geburtsdatum,geschlecht,password) VALUES (?,?,?,?,?,?);`
    
    
    //const query = `INSERT INTO Benutzer (email,vorname,name,geburtsdatum,geschlecht) VALUES (${data.email},${data.vorname},${data.name},${data.geburtsdatum},${data.geschlecht});`
    
    conn.query(query,[data.email,data.vorname,data.name,data.geburtsdatum,data.geschlecht,hashedPassword],(err, result) => {

        if (err) {
            console.log("error at register");
            //next(err);
            return res.json(err);
        }

        if (result) {
            res.send(data);
        }
        else {
            console.log("result length is null at register");
        }
    })
}

module.exports.login = async (req,res,next) => {

    //console.log(req.body)

    const username = req.body.username
    const password = req.body.password

    const query = `SELECT * from Benutzer where email= "${username}";`

    //console.log(query)

    const user = conn.query(query,async (err,result)=>{

        if (err) {
            console.log("error at login");
            next(err);
            res.json(err);
        }

        console.log(result)

        if (result) {
            const validate = await bcrypt.compare(password, result[0].password);
           // console.log(result,result[0].password,hashedPassword,hashedPassword===result.password)

            if(validate)
            {
                res.json(result);   
            }else{
                res.json({"Ops":"Password is wrong"})
            }

        }
        else {
            console.log("result length is null at login");
        }
    })
}
