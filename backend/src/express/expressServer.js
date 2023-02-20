const express=  require('express');
const cors = require('cors');
const server = express();
server.use(express.json());
server.use(cors());

const getAllCustomers= require('./handlers/getAllCustomers');
const registerCustomer= require('./handlers/registerCustomer');
const signinCustomer= require('./handlers/signinCustomer');
const detailsOfCustomer= require('./handlers/detailsOfCustomer');
const createCard = require('./handlers/createCard');
const getAllCards = require('./handlers/getAllCards');
const getMyCards = require('./handlers/getMyCards');
const authenticateCustomer = require('./middlewares/authenticateCustomer');
const getCard = require('./handlers/getMyCardByUserAndCardId');
const deleteCard = require('./handlers/deleteCard');
const updateCard = require('./handlers/updateCard');

server.get('/customers',getAllCustomers );
server.post('/customers/register', registerCustomer);
server.post('/customers/signin', signinCustomer);
server.get('/customers/getmydetails', detailsOfCustomer);

server.get('/cards',  getAllCards    );
server.get('/cards/getcard/:id',  getCard);
server.get('/cards/getmycards/:id', getMyCards );
server.post('/cards/create',  createCard );
server.delete('/cards/deleteone/:id', deleteCard);
server.put('/cards/updatecard/', updateCard );

server.listen(3900, ()=>console.log('Express listening'));

