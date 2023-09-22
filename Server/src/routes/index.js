const {getCharById} = require('../controllers/getCharById')
const {login} = require('../controllers/login')
const {postUser }= require('../controllers/postUser')
const {postFav} = require('../controllers/postFav')
const {deleteFav} = require('../controllers/deleteFav')




const route = require('express').Router()

route.get("/login", login)
route.post("/login", postUser)
route.post("/fav", postFav)
route.delete("/fav/:id", deleteFav)
route.get("/character/:id", getCharById)


module.exports = route;
