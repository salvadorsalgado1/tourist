const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const nodemailer = require('nodemailer');

const db = mysql.createPool({
    connectionLimit:10,
    host:'us-cdbr-east-04.cleardb.com',
    user:'bdf10980e724ba',
    database:'heroku_533291d08d93d66',
    password:'3f2b40ad'
  })

  router.get('/:user', (req, res)=>{
    let email = req.params.user;
    const sqlEmail = "SELECT userPassword FROM heroku_533291d08d93d66.users where email = ?;";
    db.query(sqlEmail, email, (err, result)=>{
        console.log(email)
        res.send(result)
        let password = result[0].userPassword;

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'we.travel.around.solutions@gmail.com',
              pass: 'WeTravel101!'
            }
          });
          
          var mailOptions = {
            from: 'we.travel.around.solutions@gmail.com',
            to: email,
            subject: 'Password Request from We Travel',
            text: `Not to worry! We have your password: ${password}`,
            html:`<h2>We Travel</h2>
                    <p>Hello! We have retrieved your password. Thank you for being a member!</p>
                    <p> Your password: <strong>${password}</strong></p>`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if(error){
              console.log(error);
            } else{
              console.log('Email sent: ' + info.response);
            }
          });




        
    })
    
     

   


       
  })

  
  module.exports = router;