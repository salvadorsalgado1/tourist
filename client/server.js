const express = require('express')
const serverStatic = require('serve-static');
const path = require('path')
const cors = require('cors')
const mysql = require('mysql')
const {createPool} = require('mysql')
const bodyParser = require('body-parser');
const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Currently running on port ${port}`)
})