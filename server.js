//=========================
////// DEPENDENCIES ////////
//=========================
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const db = mongoose.connection;

//==================
//// PORT///////
//=================
const PORT = process.env.PORT || 3000;

//==================
////// DATABASE ////
//==================
const MONGODB_URI = process.env.MONGODB_URI;

//===========================
/// CONNECT TO MONGODB AND ERROR HANDLING ///
//===========================
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true }
    );
    
    // Error / success
    db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
    db.on('connected', () => console.log('mongod connected: ', MONGODB_URI));
    db.on('disconnected', () => console.log('mongod disconnected'));

//===============================
//////// MIDDLEWARE /////////////
//===============================
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

//=====================
/////// ROUTES ///////
//=====================
app.get('/', (req, res) => {
    res.send('Hello World');
});

//======================
////// LISTENER ////////
//======================
app.listen(PORT, () => {
    console.log("Express is listening carefully on port:", PORT);
});