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
    const sqlGetReservations= "SELECT * FROM heroku_533291d08d93d66.reservations where guideID = ? ORDER BY start_time asc";
    let id = req.params.id;
    console.log(id)
        db.query(sqlGetReservations, id, (err, result)=>{
          res.send(result);
      }) 
  })
 
  module.exports = router;