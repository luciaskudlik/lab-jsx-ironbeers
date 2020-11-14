const React = require('react');

function BeerCard(props) {
  return (
    <a href={`/beers/${props.beer.id}`}>
      <div>
        <img src={props.beer.image_url} alt="" />
        <h1>{props.beer.name}</h1>
        <p>{props.beer.description}</p>
        {props.hideDetails ? null : (
          <div>
            <h2>Food Pairing:</h2>
            <ul>
              {props.beer.food_pairing.map((food, index) => {
                return <li key={index}>{food}</li>;
              })}
            </ul>
            <p>{props.beer.brewers_tips}</p>
          </div>
        )}
      </div>
    </a>
  );
}

module.exports = BeerCard;
