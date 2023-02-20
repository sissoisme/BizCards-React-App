const { response } = require('express');
const cardOperations = require('../../mongoose/cardOperations');

async function getCard(req, res) {
  

    const card=    await cardOperations.getOneCardbyID(req.params.id);
    res.json(card);
}

module.exports = getCard;
