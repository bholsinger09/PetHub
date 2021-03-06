import express from 'express'
import cors from 'cors'
import bp from 'body-parser'


const server = express();

//Sets the port to Heroku's, and the files to the built project 
var port = process.env.PORT || 3000
server.use(express.static(__dirname + '/../client/dist'))


var whitelist = ['http://localhost:8080', 'https://pethub-summer19.herokuapp.com/'];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions))

//Fire up database connection
require('./db/dbconfig')


//REGISTER MIDDLEWEAR
server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

//REGISTER YOUR SESSION, OTHERWISE YOU WILL NEVER GET LOGGED IN
import Session from './middleware/session'
import AuthController from './controllers/AuthController'
server.use(new Session().express)
server.use('/api/auth', new AuthController().router)



//YOUR ROUTES HERE!!!!!!

import AnimalController from './controllers/AnimalController'
server.use('/api/animals', new AnimalController().router)

import PetApi from './controllers/PetApiController'
server.use('/api/pet-api', new PetApi().router)

import TopicController from './controllers/TopicController';
server.use('/api/topic', new TopicController().router)

import PostController from './controllers/PostController'
server.use('/api/post', new PostController().router)

// import UserController from './controllers/UserController'
// server.use('/api/users', new UserController().router)




//Default Error Handler
server.use((error, req, res, next) => {
  res.status(error.status || 400).send({ error: { message: error.message } })
})

//Catch all
server.use('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})


server.listen(port, () => {
  console.log('server running on port', port)
})