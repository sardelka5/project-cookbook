const React = require('react');

module.exports = function Table({ arrayRecipes }) {
    return (
        <div className="container cards-container" id="blyodo">
          {arrayRecipes.length ? (
            arrayRecipes.map((recipe) => (
              <a
                href={`/api/card/${recipe.idMeal}`}
                id={`${recipe.idMeal}`}
                className="link-recipe"
              >
                <div
                  id={`${recipe.idMeal}`}
                  className="card mt-3"
                  style={{ width: '18rem' }}
                >
                  <img
                    src={`${recipe.strMealThumb}`}
                    className="card-img-top"
                    alt="Картинка не прогрузилась"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.strMeal}</h5>
                    <p className="card-text">{recipe.arringredient.length}</p>
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
    );
  };