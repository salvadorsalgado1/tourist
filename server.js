const express = require('express')
const serverStatic = require('serve-static');
const path = require('path')
const cors = require('cors')
const mysql = require('mysql')
const {createPool} = require('mysql')
const bodyParser = require('body-parser');
const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());

 
const users = require('./routes/api/users')
app.use('/api/users', users);

const profile = require('./routes/api/profile')
app.use('/api/profile', profile);

const login = require('./routes/api/login')
app.use('/api/login', login);

const reviews = require('./routes/api/reviews')
app.use('/api/reviews', reviews);

const register = require('./routes/api/register')
app.use('/api/register', register)
 
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static(__dirname + '/dist'));
    app.get(/^((?!(api)).)*$/, 
    (req,res)=>res.sendFile(__dirname + '/dist/index.html'))
}

/*mysql://bdf10980e724ba:3f2b40ad@us-cdbr-east-04.cleardb.com/heroku_533291d08d93d66?reconnect=true

const db = mysql.createPool({
    connectionLimit:10,
    host:'us-cdbr-east-04.cleardb.com',
    user:'bdf10980e724ba',
    database:'heroku_533291d08d93d66',
    password:'3f2b40ad'
  })
*/
 
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Currently running on port ${port}`)
})