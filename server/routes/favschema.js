const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fav = new Schema({
    title: String,
    poster: String,
    releasedate: String
     });
     
const sign = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
     });

const favinfo = mongoose.model('favdetails', fav);
const userinfo = mongoose.model('userdetails', sign);
module.exports = favinfo;