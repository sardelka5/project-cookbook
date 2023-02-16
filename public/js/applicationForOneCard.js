const cardsContainer = document.querySelector('.cards-container');
const body = document.querySelector('body');
const cards = document.querySelectorAll('.card');

if (cardsContainer) {
  cardsContainer.addEventListener('click', async (event) => {
    event.preventDefault();
    if (event.target.parentNode.parentNode.classList.contains('link-recipe')) {
      const id = event.target.parentNode.parentNode.getAttribute('id');
      // console.log(event.target);
      const response = await fetch(`/api/card/${id}`);
      const oneRecipeObj = await response.json();

      cards.forEach((el) => el.setAttribute('class', 'card-black'));
      body.setAttribute('class', 'black-back');
      body.insertAdjacentHTML('afterend', oneRecipeObj);

      const oneCardJs = document.querySelector('.one-recipe');
      oneCardJs.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn-like')) {
          e.preventDefault();
          oneCardJs.remove();
          body.removeAttribute('class', 'black-back');
          cards.forEach((el) => el.removeAttribute('class', 'card-black'));
        }
      });

      const likeBtn = document.querySelector('.btn-like');

      likeBtn.addEventListener('click', async (e) => {
        event.preventDefault();

        if (e.target.classList.contains('btn-outline-danger')) {
          const response1 = await fetch(`/like/${id}`, { method: 'post' });
          const result = await response1.json();
          if (result === 'ok') {
            e.target.classList.remove('btn-outline-danger');
            e.target.classList.add('btn-danger');
          }
        } else {
          const response1 = await fetch(`/like/${id}`, { method: 'delete' });
          const result = await response1.json();
          if (result === 'ok') {
            e.target.classList.remove('btn-danger');
            e.target.classList.add('btn-outline-danger');
          }
        }
      });
    }
  });
}
