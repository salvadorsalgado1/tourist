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

  router.get('/user/:userPW', (req, res)=>{
    const sqlLogin = "SELECT userID, userPassword from heroku_533291d08d93d66.users where email = ?";
    const userPW = req.params.userPW;
       db.query(sqlLogin, userPW, (err, result)=>{
          res.send(result);
      })
  })
  router.get('/success/:id', (req, res)=>{
    const sqlSuccess = "SELECT \
    users.userID,\
    users.fullName,\
    users.slug,\
    users.email,\
    users.tiktok,\
    users.facebook,\
    users.mail,\
    users.instagram,\
    users.youtube,\
    users.twitter,\
    users.details_completed,\
    images.imageURL FROM heroku_533291d08d93d66.users\
    INNER JOIN heroku_533291d08d93d66.images \
    on users.userID = images.userID where users.userID = ?;";
    const id = req.params.id;
    console.log(id);
       db.query(sqlSuccess, id, (err, result)=>{
          res.send(result);
      })
  })
  
  

  module.exports = router;