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
    const sqlGetReservations= "CALL getReservations(?)";
    let id = req.params.id;
    console.log(id)
        db.query(sqlGetReservations, id, (err, result)=>{
          res.send(result);
      }) 
  })

  router.post('/submit', (req, res)=>{
    let user = req.body.reservation;
    console.log(user)

    const sqlSubmitReservation= "call createReservation(?, ?, ?, ?, ?)";
    
        db.query(sqlSubmitReservation, [user.tourist, user.guide, user.fullName, user.start, user.end], (err, result)=>{
          res.send(result);
        })
  })

  router.post('/accept', (req, res)=>{
    const sqlAcceptReservations= "update heroku_533291d08d93d66.reservations \
      set reservations.pending = 0, \
      reservations.accepted = 1 \
      where reservations.reservationID = ?";
    let id = req.body.id;
    console.log(id)
        db.query(sqlAcceptReservations, id, (err, result)=>{
          res.send(result);
      }) 
  })

  router.post('/reject', (req, res)=>{
    const sqlRejectReservations= "update heroku_533291d08d93d66.reservations \
    set reservations.pending = 0, \
    reservations.rejected = 1 \
    where reservations.reservationID = ?";
    let id = req.body.id;
    console.log(id)
        db.query(sqlRejectReservations, id, (err, result)=>{
          res.send(result);
      }) 
  })
 
  module.exports = router;