const cardsContainer = document.querySelector('.cards-container');
const body = document.querySelector('body');
const cards = document.querySelectorAll('.card');
const blyodo = document.querySelector('#blyodo');
const main = document.querySelector('#main');

if (main) {
  main.addEventListener('click', async (event) => {
    event.preventDefault();
    if (event.target.parentNode.parentNode.classList.contains('link-recipe')) {
      const id = event.target.parentNode.parentNode.getAttribute('id');

      // const response = await fetch(`/api/card/${id}`);
      // const oneRecipeObj = await response.json();

      const response = fetch(`/api/card/${id}`)
        .then((res3) => res3.json())
        .catch((err) => console.log(err.message));

      const oneRecipeObj = await response;

      cards.forEach((el) => el.classList.add('card-black'));
      body.classList.add('black-back');
      body.insertAdjacentHTML('beforeend', oneRecipeObj);

      const oneCardJs = document.querySelector('.one-recipe');
      oneCardJs.addEventListener('click', (e) => {
        if (!e.target.classList.contains('bi')) {
          e.preventDefault();
          oneCardJs.remove();
          body.classList.remove('black-back');
          cards.forEach((el) => el.classList.remove('card-black'));
        }
      });

      // const likeBtn = document.querySelector('.btn-like');
      const likeBtn = document.querySelector('.bi-big-heart');

      likeBtn.addEventListener('click', async (e) => {
        event.preventDefault();

        // if (e.target.classList.contains('btn-outline-danger')) {
        if (e.target.classList.contains('bi-heart')) {
          const response1 = await fetch(`/like/${id}`, { method: 'post' });
          const result = await response1.json();

          if (result === 'ok') {
            const likeConteinerOneCard = document.querySelector(
              '.likeConteinerOneCard'
            );
            likeConteinerOneCard.firstChild.remove();
            likeConteinerOneCard.innerHTML = `<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            class="bi bi-heart-fill bi-big-heart"
            viewBox="0 0 16 16"
            width="120"
            height="120"
          >
            <path
              fillRule="evenodd"
              class="bi"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>`;

            // e.target.classList.remove('btn-outline-danger');
            // e.target.classList.add('btn-danger');
          }
        } else {
          const response1 = await fetch(`/like/${id}`, { method: 'delete' });
          const result = await response1.json();
          if (result === 'ok') {
            const theme =
              e.target.parentNode.parentNode.parentNode.parentNode
                .previousSibling.lastChild.firstChild.innerText;
            // const theme1 =
            //   e.target.parentNode.parentNode.parentNode.previousSibling
            //     .lastChild.firstChild;

            if (theme === 'Favorite dishes') {
              let card = document.querySelectorAll('.link-recipe');
              card.forEach((el) => {
                if (el.getAttribute('id') === id) {
                  el.remove();
                }
              });
            }

            const likeConteinerOneCard = document.querySelector(
              '.likeConteinerOneCard'
            );
            likeConteinerOneCard.firstChild.remove();
            likeConteinerOneCard.innerHTML =
              ('beforeend',
              `<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            class="bi bi-heart bi-big-heart"
            viewBox="0 0 16 16"
            width="120"
            height="120"
          >
            <path 
            class="bi"
            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>`);
          }
        }
      });
    }
  });
}
