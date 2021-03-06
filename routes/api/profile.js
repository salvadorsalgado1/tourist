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

  router.post('/upload/image', (req, res)=>{
    let image = req.body.user.userImage
    let id = req.body.user.id
    console.log(image, id)
   const sqlUploadImage = 
   `update heroku_533291d08d93d66.images \
    SET imageURL = "${image}" \
    where userID = ${id};`
     db.query(sqlUploadImage, (err, result)=>{
        res.send(result);
     })
 })

  router.get('/:slug', (req, res)=>{
    let slug = req.params.slug
    console.log(slug)
     const sqlGetUser = "CALL getProfileAndReviews(?)";
     db.query(sqlGetUser, slug, (err, result)=>{
         res.send(result);
     })
 })

 router.post('/description', (req, res)=>{
  let id = req.body.description.id;
  let desc = req.body.description.description
   const sqlUpdateDescription= `UPDATE heroku_533291d08d93d66.details SET intro = ? where userID = ?;`
   db.query(sqlUpdateDescription, [desc, id],(err, result)=>{
       res.send(result);
   })
})

 router.post('/image', (req, res)=>{
  let image = req.body.image;
   const sqlUploadImage= `SELECT * FROM heroku_533291d08d93d66.users;`
   console.log(image);
   db.query(sqlUploadImage, (err, result)=>{
       res.send(result);
   })
})

  module.exports = router;