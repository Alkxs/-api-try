const express = require('express');
const app = express();
const PORT = 8000;

const pokemons = {
  bulbasaur: {
    type: 'grass/poison',
    number: 1,
    hp: 45,
  },
  charmender: {
    type: 'fire',
    number: 2,
    hp: 60,
  },
  squirtle: {
    type: 'water',
    number: 3,
    hp: 54,
  },
  unknown: {
    type: 'unknown',
    number: 0,
    hp: 0,
  },
};

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (request, response) => {
  const pokemonName = request.params.name.toLowerCase();
  if (pokemons[pokemonName]) {
    response.json(pokemons[pokemonName]);
  } else {
    response.json(pokemons[unknown]);
  }
});

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}!`);
});
