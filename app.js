const express = require('express');
const erv = require('express-react-views');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

// VIEW ENGINE SETUP
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine());

// MIDDLEWARE
app.use(express.static(__dirname + '/public'));

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('Home');
});

app.get('/beers', (req, res) => {
  punkAPI
    .getBeers()
    .then(beersFromApi => {
      console.log('all beers from API:', beersFromApi);
      const data = { beersFromApi: beersFromApi };
      res.render('Beers', data);
    })
    .catch(error => console.log(error));
});

app.get('/random-beers', (req, res) => {
  punkAPI
    .getRandom()
    .then(response => {
      console.log('the random beer:', response);
      const data = { response: response };
      res.render('RandomBeers', data);
    })
    .catch(error => console.log(error));
});

app.listen(3000, () => {
  console.log('🏃‍ on port 3000');
});
