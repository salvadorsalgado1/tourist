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

  router.get('/:id', (req, res)=>{
    let id = req.params.id
    // console.log(slug)
     const sqlGetSessions =
      "select \
      messages.session_id, \
      messages.userID,\
      messages.fullName,\
      messages.image,\
      messages.session_names \
      from heroku_533291d08d93d66.messages \
     where messages.userID = ?;";
     db.query(sqlGetSessions, id, (err, result)=>{
         res.send(result);
     })
 })

 router.get('/check/:session', (req, res)=>{
  let session = req.params.session
   const sqlGetSessions =
    "SELECT session_name, session_id FROM heroku_533291d08d93d66.sessions \
    where session_name = ?;";
   db.query(sqlGetSessions, session, (err, result)=>{
       res.send(result);
   })
})

 router.post('/send', (req, res)=>{
      let convo = req.body.convo
      let pFullName = req.body.profile_FullName;
      let puserID = req.body.profile_userID;
      let pimage = req.body.profile_image;
      //--Profile---
      //----End of Profile
      //----User----
      let userID = req.body.user_userID;
      let fullName = req.body.user_FullName;
      let image = req.body.user_image;
      //----End of User----
      console.log("convo: ", typeof convo);
      console.log("Profile Full Name: ", typeof pFullName);
      console.log("Profile ID: ",typeof puserID);
      console.log("Profile Image: ",typeof pimage);
      console.log("User ID: ",typeof userID);
      console.log("User Full Name: ",typeof fullName);
      console.log("User Image: ",typeof image);
  //const sqlCreateSession = "call createSession('----127aeeeeegiiijkklmmmnnrssstttuuy', 'Michael Jakes', 2, 'https://firebasestorage.googleapis.com/v0/b/tourist-f5057.appspot.com/o/images%2Fdefault\-profile-picture1.jpg?alt=media&token=a4443b3f-5584-469a-9399-e9e6dde2727a', 17,'Amber Rose Mejia', 'https://firebasestorage.googleapis.com/v0/b/tourist-f5057.appspot.com/o/images%2Fdefault-profile-picture1.jpg?alt=media&token=a4443b3f-5584-469a-9399-e9e6dde2727a')";
  const sqlCreateSession= `CALL createSession('${convo}', '${pFullName}', ${puserID}, '${pimage}', ${userID}, '${fullName}', '${image}')`;
   db.query(sqlCreateSession,
     (err, result)=>{
       res.send(result);
   })
})

  module.exports = router;