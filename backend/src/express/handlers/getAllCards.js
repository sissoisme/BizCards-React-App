const operations=  require('../../mongoose/cardOperations');
const customerOperations = require('../../mongoose/customerOperations');


/** @type {import("express").RequestHandler} */
async function getAllCards(req,res){
    const cards =            await   operations.getAllCards();

    res.json(cards);
} 

module.exports= getAllCards;