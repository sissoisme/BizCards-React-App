const cardOperations = require('../../mongoose/cardOperations');
async function getMyCards(req,response){

      
      const userCards=    await  cardOperations.getCardsByUserId(   `${req.params.id}` );
      response.json(userCards);
}

module.exports= getMyCards;