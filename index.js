const fetch = require('node-fetch');

var count = 0; 
fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(body => {
        // console.log(body.count);
        count = body.count;
        console.log(count);
        // return body.count;
    })
