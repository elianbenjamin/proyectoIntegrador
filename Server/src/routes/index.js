const {login} = require('../controllers/login')
const {getCharById} = require('../controllers/getCharById')
const {postFav, deleteFav} =require('../controllers/handleFavorites')

const route = require('express').Router()

route.get("/character/:id", getCharById)

route.get("/login", login)

route.post("/fav", postFav)

route.delete("/fav/:id", deleteFav)


module.exports = route;
