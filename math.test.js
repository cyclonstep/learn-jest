const {sum, mul, sub, div } = require('./math');
const fetch = require('node-fetch');

test('Adding 1 + 1 equals 2', () => {
    expect(sum(1,1)).toBe(2)
});

test('fetching count pokemon equals to 964', ()=> {
    var count = 0; 
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(body => {
            // console.log(body.count);
            count = body.count;
            // return body.count;
        })
        .then(() => {
            expect(count).toBe(964)
        })
});