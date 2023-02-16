const cardsContainer = document.querySelector('.cards-container');
const body = document.querySelector('body');
const cards = document.querySelectorAll('.card');

if (cardsContainer) {
  cardsContainer.addEventListener('click', async (event) => {
    event.preventDefault();

    if (event.target.parentNode.parentNode.classList.contains('link-recipe')) {
      const id = event.target.parentNode.parentNode.getAttribute('id');

      const response = await fetch(`/api/card/${id}`);
      const oneRecipeObj = await response.json();

      cards.forEach((el) => el.setAttribute('class', 'card-black'));
      body.setAttribute('class', 'black-back');
      body.insertAdjacentHTML('afterend', oneRecipeObj);

      const oneCardJs = document.querySelectorAll('.one-card-js');

      oneCardJs.forEach((card) => {
        card.addEventListener('click', (e) => {
          if (!e.target.classList.contains('btn-like')) {
            e.preventDefault();
            window.location.assign('/home');
            // card.remove();
            // body.removeAttribute('class', 'black-back');
            // cards.forEach((el) => el.removeAttribute('class', 'card-black'));
            //? можно переделать на др.рендеринг
          }
        });
      });

      const likeBtn = document.querySelector('.btn-like');

      likeBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        console.log(id);
      });
    }
  });
}
