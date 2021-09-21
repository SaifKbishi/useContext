const dbConfig = require('../config/mongoose.js');
// import dbConfig from '../config/mongoose.js';
const mongoose = require('mongoose');

const db={};

db.mongoose = mongoose;
db.course = require('./course.model');

//db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;