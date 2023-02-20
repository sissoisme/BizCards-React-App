const { string } = require('joi');
const mongoose=   require('mongoose');

 const cardSchema= mongoose.Schema({
      creatorId:String,
      businessName:String,
      businessDescription:String,
      businessAddress:String,
      businessPhone:String,
      businessImage:String,
      userId:String
});

const cardModel=  mongoose.model('card',cardSchema);

module.exports=  cardModel; 




