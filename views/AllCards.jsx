/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function AllCards({ arrayRecipes }) {
  return (
    <Layout>
      <div className="container cards-container">
        <h1 className="mt-5">All recipes here:</h1>
        {arrayRecipes.length ? (
          arrayRecipes.map((recipe) => (
            <a
              href={`/api/card/${recipe.idMeal}`}
              id={`${recipe.idMeal}`}
              className="link-recipe"
            >
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src={`${recipe.StrMealThumb}`}
                  className="card-img-top"
                  alt="Картинка не прогрузилась"
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.StrMeal}</h5>
                  <p className="card-text">{recipe.arringridient.length}</p>
                </div>
              </div>
            </a>
          ))
        ) : (
          <a href="/" id="52772" className="link-recipe">
            <div className="card" style={{ width: '18rem' }}>
              <img
                src="https://podacha-blud.com/uploads/posts/2022-10/1666145288_62-podacha-blud-com-p-myasnoe-blyudo-na-prazdnichnii-stol-foto-78.jpg"
                className="card-img-top"
                alt="Картинка не прогрузилась"
              />
              <div className="card-body">
                <h5 className="card-title">Название</h5>
                <p className="card-text">Кол-во: 5</p>
              </div>
            </div>
          </a>
        )}
      </div>
    </Layout>
  );
};
