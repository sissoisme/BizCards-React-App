const operations = require('../../mongoose/customerOperations');

async function detailsOfCustomer(req,res) {
       
        const customer=  await  operations.getCustomerDetailsById(req.userID);
        res.json(customer);
}
module.exports= detailsOfCustomer;