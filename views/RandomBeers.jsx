const React = require('react');
const Layout = require('./Layout');
const BeerCard = require('./components/BeerCard');

function RandomBeers(props) {
  //props = {data: {}};
  return (
    <Layout>
      <BeerCard beer={props.response[0]} />
    </Layout>
  );
}

module.exports = RandomBeers;
