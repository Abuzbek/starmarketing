const express = require('express');
const router = express.Router();
const Message = require('../model/Message')

/* GET home page. */
router.get('/', function(req, res, next) {
  const portfolio = Message.find({}, (err, data)=>{
    if (err) {  
      console.log(err);
    } else {
      res.json(data)
    }
  })
});
router.post('/', function(req, res, next) {
  const portfolio = new Message(req.body)
  portfolio.save((err,data)=>{
    if (err) {
      console.log(err);
    } else {
      res.json(data)
    }
  })
});
module.exports = router