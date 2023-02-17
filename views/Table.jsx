const React = require('react');

module.exports = function Table({ arrayRecipes, category, likes }) {
  return (
    <div id="table">
      <h1 className="categoryTitle"> {category} </h1>
      <div className="container cards-container" id="blyodo">
        {arrayRecipes.length ? (
          arrayRecipes.map((recipe) => (
            <a
              href={`/api/card/${recipe.idMeal}`}
              id={`${recipe.idMeal}`}
              key={`${recipe.idMeal}`}
              className="link-recipe"
            >
              <div
                id={`${recipe.idMeal}`}
                className="card mt-3 dishCard"
                key={`${recipe.idMeal}`}
                style={{ width: '18rem' }}
              >
                <img
                  src={`${recipe.strMealThumb}`}
                  className="card-img-top for-btn-like"
                  alt="Картинка не прогрузилась"
                />
                <div className="likeConteiner">
                  {likes ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="red"
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                      width="70"
                      height="70"
                    >
                      <path
                        fillRule="evenodd"
                        className="bi"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="red"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                      width="70"
                      height="70"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  )}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{recipe.strMeal}</h5>
                  <p className="card-text">{`Number of ingridients: ${recipe.arringredient.length}`}</p>
                  <p className="card-text">
                    {recipe.arringredient.length > 10
                      ? 'Cooking time > 30min.'
                      : 'Cooking time: ~30min.'}
                  </p>
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">No data</h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
