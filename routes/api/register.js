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

  router.get('/', (req, res)=>{
    const sqlTest= "CALL testingP()";
   // const userPW = req.params.userPW;
       db.query(sqlTest, (err, result)=>{
          res.send(result);
      })
  })
   
  

  module.exports = router;