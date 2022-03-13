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
    const sqlReviews = "SELECT * from heroku_533291d08d93d66.reviews where userID = 1";
    const reviewID = req.params.id;
    console.log(reviewID);
       db.query(sqlReviews, reviewID, (err, result)=>{
          res.send(result);
      })
  })

  router.post('/submit', (req, res)=>{
    const sqlSubmitReview = "CALL addProfileReview(?,?,?,?,?,?,?);";
   // const reviewID = req.params.id;
    
    const profileID = req.body.review.profileID
    const reviewerID = req.body.review.reviewerID
    const rating = req.body.review.rating
    const review = req.body.review.review
    const dateSub = req.body.review.dateSubmit
    const slug = req.body.review.slug
    const fullName = req.body.review.fullName
    
       db.query(sqlSubmitReview, [review, rating, profileID, reviewerID, slug, fullName, dateSub],(err, result)=>{
         console.log(result)
          res.send(result);
      })
  })
   
   
  

  module.exports = router;