const mongoose = require('mongoose')
const Schema = mongoose.Schema
const product = new Schema({
    name:String,
    number:String,
    categories:String,
    message:String
})
module.exports = mongoose.model('message' , product)