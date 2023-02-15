const cardsContainer = document.querySelector('.cards-container');
const body = document.querySelector('body');
const card = document.querySelector('.card');
const img = document.querySelector('.card-img-top');

if (cardsContainer) {
  cardsContainer.addEventListener('click', async (event) => {
    event.preventDefault();

    if (event.target.parentNode.parentNode.classList.contains('link-recipe')) {
      const id = event.target.parentNode.parentNode.getAttribute('id');
      console.log(id);
      const response = await fetch(`/api/card/${id}`);
      const oneRecipeObj = await response.json();
      console.log(oneRecipeObj);

      console.log(card);
      //сделать чтобы много сразу карточек становились прозрачными
      card.setAttribute('class', 'card-black');
      img.setAttribute('class', 'card-black');
      body.setAttribute('class', 'black-back');
      body.insertAdjacentHTML('afterend', oneRecipeObj);
    }
  });
}
