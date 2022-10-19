const express = require('express')
const app = express()
const router  = express.Router();

const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/database')
const mainPageRoutes = require('./routes/mainPageRoute')
const drugPageRoutes = require('./routes/drugPageRoute')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('views', path.join(__dirname, 'views'));

//app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.static(__dirname));
app.use(express.static('views'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', mainPageRoutes)
app.use('/drug', drugPageRoutes)

app.use(router);

//app.get('/drugs', function (req, res) {
//    res.render('drugs.ejs');
//  });

//  app.get('/drugs', function(req, res) {
//    res.render('/views/drugs');
// });
 
router.get('/drugs', (req, res) => {
    res.render('drugs.ejs');
   });

app.listen(process.env.PORT || PORT, ()=>{
    console.log('The server is running!')
})    