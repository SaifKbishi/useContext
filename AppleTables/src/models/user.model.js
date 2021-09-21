const mongoose = require('mongoose');

const User = mongoose.model("User",
  {
    userid: String,
firstname: String,
lastname: String,
firstnameinarabic: String,
lastnameinarabic: String,
tznumber: String,
phone: String,
birthday: String,
email: String,
cityname: String,
gendername: String,
religionname: String
    
  }
);

module.exports = User;

/**userid: Number,
   ID: Number,
   firstname: String,
   lastname: String,
   cellphone: String,
   bdate: Date,
   gender: String,
   religion: String,
   email: String, */