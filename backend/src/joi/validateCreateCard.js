const joi=  require('joi');

const myCardObject= {
  creatorId:joi.string(),
      businessName: joi.string().required().min(5).max(255),
      businessDescription: joi.string().required().min(20).max(255)  ,
      businessAddress: joi.string().required().min(20).max(255)  ,
      businessPhone: joi.string().required().min(9).max(14)  ,
      businessImage: joi.string().required().min(20).max(500)  
};

 const validateCardByJoi=   joi.object(myCardObject);

 function validateCard(cardDetails ){
   return   validateCardByJoi.validate(cardDetails );
 }

 module.exports = validateCard;

