const operations =  require('../../mongoose/cardOperations');
async function updateCard(req,res){




     const cardID=   req.body._id; 
     const userID = req.body.creatorId;
     if(!cardID)
     {
         return   res.status(400).json('לא סופק מזהה כרטיסיה');
     }
     //פניה לשכבת בסיס נתונים
        const result =  await operations.updateOneCard(cardID, userID, req.body );
       
        if(result!=null)
            return res.json('עודכן בהצלחה');
            return res.status(500).json('תקלה בשרת לא עודכן');
}

module.exports =updateCard;