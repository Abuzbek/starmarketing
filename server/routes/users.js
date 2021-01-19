const express = require('express');
const router = express.Router();
const Message = require('../model/Message')
/* GET users listing. */
router.get('/', function(req, res, next) {
  Message.find({}, (err,data)=>{
    if(err){
      console.log(err);
    }
    else{
      res.render('index',{
        title:'admin',
        data: data.reverse()
      })
    }
  })
});
router.get('/delete/:id', function(req, res, next) {
  Message.findByIdAndRemove(req.params.id, (err,data)=>{
    if(err){
      console.log(err);
    }
    else{
      res.redirect('/yorqinjon')
      console.log(data);
    }
  })
});

module.exports = router;
