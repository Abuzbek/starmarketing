const { Telegraf } = require('telegraf')
const Message = require('./model/Message')
const bot = new Telegraf("1464697566:AAGEZyB-TizBCSi95QSP24GvY0e1wBmB6xY")

bot.start((ctx)=>{
  Message.find({}, (err,data)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(data);
    }
  })
})
bot.launch()

