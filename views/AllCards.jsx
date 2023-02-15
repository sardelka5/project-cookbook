/* eslint-disable react/prop-types */
const React = require('react');
const Home = require('./Home');

module.exports = function AllCards({ cards }) {
  return (
    <Home>
      <div className="container cards-container">
        <h1 className="mt-5">All cards here:</h1>
        <ul id="list" className="list-group mt-5">
          {cards.length ? (
            cards.map((card) => (
              <li key={card.id} data-id={card.id} className="list-group-item">
                {card.name}
              </li>
            ))
          ) : (
            <li className="list-group-item">No data!</li>
          )}
        </ul>
      </div>
    </Home>
  );
};
