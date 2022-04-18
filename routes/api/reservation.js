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

  router.get('/accept/:id', (req, res)=>{
    const sqlAcceptReservations= "CALL getReservations(?)";
    let id = req.params.id;
    console.log(id)
        db.query(sqlGetReservations, id, (err, result)=>{
          res.send(result);
      }) 
  })

  router.get('/reject/:id', (req, res)=>{
    const sqlRejectReservations= "CALL getReservations(?)";
    let id = req.params.id;
    console.log(id)
        db.query(sqlGetReservations, id, (err, result)=>{
          res.send(result);
      }) 
  })
 
  module.exports = router;