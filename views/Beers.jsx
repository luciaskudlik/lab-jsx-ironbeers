const React = require('react');
const Layout = require('./Layout');
const BeerCard = require('./components/BeerCard');

function Beers(props) {
  return (
    <Layout>
      {props.beersFromApi.map((beer, i) => {
        return <BeerCard key={i} beer={beer} hideDetails={true} />;
      })}
    </Layout>
  );
}

module.exports = Beers;
