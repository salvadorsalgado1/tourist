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

  router.get('/all', (req, res)=>{
      const sqlGetAll = "SELECT * FROM heroku_533291d08d93d66.users;";
      db.query(sqlGetAll, (err, result)=>{
          res.send(result);
      })
  })

  router.get('/list/:param', (req, res)=>{
    const param = req.params.param;
    const sqlGetList = `SELECT 
    users.userID,\
    users.fullName,\
    users.slug,\
    details.location,\
    details.age,\
    details.language_spoken\
    FROM heroku_533291d08d93d66.users\ 
    INNER JOIN heroku_533291d08d93d66.details on users.userID = details.userID\
     
    where details.userID = users.userID\
    AND users.fullname\
    LIKE '%${param}%' LIMIT 100;`;
     console.log(param);
    db.query(sqlGetList, (err, result)=>{
        res.send(result);
    })
})

router.get('/profile', (req, res)=>{
   // const param = req.params.param;
    const sqlGetList = `SELECT * FROM heroku_533291d08d93d66.users;`
    //console.log(param);
    db.query(sqlGetList, (err, result)=>{
        res.send(result);
    })
})
  

  module.exports = router;