const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const db = mysql.createPool({
    connectionLimit:10,
    host:'us-cdbr-east-04.cleardb.com',
    user:'bdf10980e724ba',
    database:'heroku_533291d08d93d66',
    password:'3f2b40ad'
  })

  router.post('/', (req, res)=>{
    //(userID, fullName, slug, email, username, userPassword, tiktok, facebook, mail,instagram, youtube, twitter )
    const sqlTest= "CALL createNewUser(?, ?, ?, ?, ?, '', '', '', '', ')";
    let fullName = req.body.fullName;
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;
     
   
       db.query(sqlTest, (err, result)=>{
          res.send(result);
      })
  })
   //http://localhost:5000/api/register
  

  module.exports = router;