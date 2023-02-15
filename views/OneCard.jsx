/* eslint-disable react/prop-types */
const React = require('react');

module.exports = function OneCard({ oneRecipeObj }) {
  return (
    <div className="container one-recipe">
      <div className="card mb-3">
        <h5 className="card-title mt-3 header-center">{oneRecipeObj.name}</h5>
        <img
          src={`${oneRecipeObj.img}`}
          className="card-img-top one-img"
          alt="Картинка не прогрузилась"
        />
        <div className="card-body">
          <p className="card-text">
            <ul className="list-group list-group-flush">
              {oneRecipeObj.ingredients.map((el) => (
                <li className="list-group-item">{el}</li>
              ))}
            </ul>
          </p>
          <p className="card-text text-justify">{oneRecipeObj.instruction}</p>
        </div>
      </div>
    </div>
  );
};
