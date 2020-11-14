const React = require('react');
const Layout = require('./Layout');

function Home() {
  return (
    <Layout>
      <main>
        <h1>Home</h1>
        <img src="./../images/beer.png" alt="" />
        <a href="/beers">Check the beers!</a>
        <a href="/random-beers">Check a Random Beer</a>
      </main>
    </Layout>
  );
}

module.exports = Home;
