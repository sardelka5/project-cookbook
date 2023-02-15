/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function AllCards({ arrayRecipes }) {
  return (
    <Layout>
      <div className="container cards-container" id='blyodo'>
          {arrayRecipes.length ? (
            arrayRecipes.map((recipe) => (
              <div id={`${recipe.idMeal}`} className="cardn mt-3" style={{ width: '18rem' }}>
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
            ))
          ) : (
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
          )}
          <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Кнопка выпадающего списка
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#" id="random">Random</a></li>
    <li><a class="dropdown-item" href="#" id="seafood">Seafood</a></li>
    <li><a class="dropdown-item" href="#">Что-то еще здесь</a></li>
  </ul>
</div>

      </div>
    </Layout>
  );
};
