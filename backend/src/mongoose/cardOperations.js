const cardModel = require('./cardModel');

async function createCardInMongoDB(cardDetails){
    try{
            const createdCardInDB=    await new cardModel(cardDetails).save();

           return createdCardInDB;
    }
    catch
    {
      
         return  null;
    }
}

async function getAllCards(){
      try
      {
            const cards=     await    cardModel.find();
            return cards;
      }
      catch
      {
            return null;
      }
}


async function getCardsByUserId(idOfUSer){

      try
      {
            const cardsOfThatUser=  await  cardModel.find({ creatorId: idOfUSer } );
         
            return cardsOfThatUser;        
      }
       
    catch{
      return null;
    }

}


async function getOneCardbyID(cardId){
      try{
            const oneCard = await cardModel.find({
                  _id: cardId
            });
            return oneCard;
      }
      catch{
            return null
      }
}


async function deleteOneCard(cardid,userid ){
    try{
      return  await  cardModel.findOneAndDelete({
            _id: cardid,
      });
    }
    catch
    {
            return null;
    }
}

async function updateOneCard(cardid,userid, cardUpdatedData){
     
    try
    {
           const  filter= {
                  _id:cardid,
                  creatorId: userid
           };
           return await  cardModel.findOneAndUpdate(filter,cardUpdatedData );
    }
    catch
    {
           return null;
    }
} 



module.exports=  {createCardInMongoDB, getAllCards,getCardsByUserId,
      getOneCardbyID,deleteOneCard,updateOneCard  };

  