/* eslint-disable react/prop-types */
const React = require('react');

module.exports = function OneCard({ oneRecipeObj, dataFromBD }) {
  return (
    <div className="container one-recipe">
      <div className="card mb-3 one-card-js">
        <h5 className="card-title mt-3 header-center">
          {oneRecipeObj.name}
          {' '}
          <button
            id={`${oneRecipeObj.idMeal}`}
            type="button"
            className={
              dataFromBD
                ? 'btn btn-danger btn-like'
                : 'btn btn-outline-danger btn-like'
            }
          >
            Like
          </button>
        </h5>
        <img
          src={`${oneRecipeObj.img}`}
          className="card-img-top one-img"
          alt="Картинка не прогрузилась"
        />
        <div className="likeConteinerOneCard">
          <svg xmlns="http://www.w3.org/2000/svg" fill="red" className="bi bi-heart" viewBox="0 0 16 16" width="120" height="120">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </div>
        <div className="card-body">
          <p className="card-text ingridientTitle">
            {' '}
            Ingridients:
            <ul className="list-group list-group-flush ingridientList">
              {oneRecipeObj.ingredients.map((el) => (
                <li
                  key={`${oneRecipeObj.idMeal}`}
                  id={`${oneRecipeObj.idMeal}`}
                  className="list-group-item ingridient"
                >
                  {el}
                </li>
              ))}
            </ul>
          </p>
          <p className="card-text ingridientTitle">Сooking instruction</p>
          <p className="card-text text-justify">{oneRecipeObj.instruction}</p>
        </div>
      </div>
    </div>
  );
};
