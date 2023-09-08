const axios = require('axios')


 const getCharById = (res, id) =>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then(({name, gender, species, origin, image,  status})=>{
        const character = {
            id,
            name ,
            gender,
            species,
            origin: origin.name,
            image,
            status
        }
        res.writeHead(200, {'Content-Type':'application/json'})
        return res.end(JSON.stringify(character))
        
    })
    .catch((error) => {
        return res
                 .writeHead(500, {'Content-Type':'text/plain'})
                 .end(error.message)
        
    } )
}

module.exports = {
    getCharById
}