const React = require('react');

module.exports = function Table({ arrayRecipes, category }) {
  return (
    <div className="tableCards">
      <h1 className="categoryTitle">
        {' '}
        {category}
        {' '}
      </h1>
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
                className="card mt-3 dishCard"
                style={{ width: '18rem' }}
              >
                <img
                  src={`${recipe.strMealThumb}`}
                  className="card-img-top for-btn-like"
                  alt="Картинка не прогрузилась"
                />
                <div className="likeConteiner">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="red" className="bi bi-heart" viewBox="0 0 16 16" width="70" height="70">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
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
    </div>
  );
};
