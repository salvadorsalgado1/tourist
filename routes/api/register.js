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
    const sqlCreateUser = "CALL createNewUser(?, ?, ?, ?, ?);";
    let fullName = req.body.fullName;
    let slug = req.body.slug
    let email = req.body.email;
    let userName = req.body.userName;
    let password = req.body.password;
 
    console.log(fullName, userName, email, password, slug)
       db.query(sqlCreateUser, [fullName, slug, email, userName, password], (err, result)=>{
          res.send(result);
      })
  })

  router.post('/details/true', (req, res)=>{
    const sqlDetails = "UPDATE heroku_533291d08d93d66.users SET details_completed = 1 WHERE userID = ?;";
   let id = req.body.details.id;
  
    console.log(id)
        db.query(sqlDetails, id, (err, result)=>{
         res.send(result);
     })  
 })
  router.post('/details', (req, res)=>{
     const sqlDetails= "CALL submitDetailsUser(?, ?, ?, ?, ?);";
    let id = req.body.details.id;
    let location = req.body.details.location;
    let age = req.body.details.age;
    let food = req.body.details.food;
    let language = req.body.details.language
     console.log(id, location, age, food, language)
         db.query(sqlDetails, [location, age, language, food, id],(err, result)=>{
          res.send(result);
      })  
  })
  router.get('/check/email/:email', (req, res)=>{
    //(userID, fullName, slug, email, username, userPassword, tiktok, facebook, mail,instagram, youtube, twitter )
    const sqlCheckEmail= "SELECT email FROM heroku_533291d08d93d66.users where email = ?;";
    let email = req.params.email;
    
    console.log(email)
        db.query(sqlCheckEmail, email,(err, result)=>{
          res.send(result);
      }) 
  })
  router.get('/check/username/:slug', (req, res)=>{
    //(userID, fullName, slug, email, username, userPassword, tiktok, facebook, mail,instagram, youtube, twitter )
    const sqlCheckUserName= "SELECT slug FROM heroku_533291d08d93d66.users where slug = ?;";
    let slug = req.params.slug;
    
    console.log(slug)
        db.query(sqlCheckUserName, slug,(err, result)=>{
          res.send(result);
      }) 
  })
   //http://localhost:5000/api/register
  

  module.exports = router;