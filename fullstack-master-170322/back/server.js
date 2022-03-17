const express = require('express')
const app = express()
app.use(express.json()); 
app.use(express.urlencoded());
const axios = require('axios')


  
app.get('/api/pokemon/:id', function (req, res){
        
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`)
        .then(function (response) {

        const type = response.data.types.map(element=>{const classe = {
           "type": element.type.name
        }
            return classe})
        
        res.json({
            "id":response.data.id,
            "name":response.data.name,
            "type": type[0].type,
            "image": response.data.sprites.other["official-artwork"].front_default,
            "poids": response.data.weight/10 + " kg",
            "taille":response.data.height/10+ " m"
        })
        
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
    });

  })
  
  module.exports = app

