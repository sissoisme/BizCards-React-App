const customerOperations = require('../../mongoose/customerOperations');
const jsonwebtoken=  require('jsonwebtoken');

async function authenticateCustomer(req,response,next){
        //  .  נשלח טוקן .  
        const  token = req.headers.token;
        if(!token)
            return  response.status(401).json({'message':'לא סופק טוקן'});
 
            try
            {
               const data=  jsonwebtoken.verify(token, 'mykey');
                  req.userID=  data.customerid;
                  next();
            }
            catch
            {
                return  response.status(401).json({'message':'טוקן לא חוקי'});
            }
   
       
}

module.exports= authenticateCustomer;