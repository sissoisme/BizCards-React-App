const validateCreateCard=  require('../../joi/validateCreateCard');
const operations=  require('../../mongoose/cardOperations');

async function createCard( req , response   ){

            const result=   validateCreateCard(req.body);
                    if(result.error)
                        return response.status(400).json(result.error.details[0].message);
        
                        req.body.userId=   req.userID; 
                    const cardFromDB =      await    operations.createCardInMongoDB(req.body);
                    
                    if(cardFromDB== null){
                        return response.status(500)
                        .json('שגיאה כללית כרטיסיה לא נשמרה בבסיס הנתונים');
                    }

                    response.json(cardFromDB);
     
}


module.exports= createCard;