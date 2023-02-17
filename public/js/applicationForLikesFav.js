const manyLikeBtns = document.querySelectorAll('.many-like-btns');

if (manyLikeBtns) {
  manyLikeBtns.forEach((btn) => btn.addEventListener('click', (event) => {
    console.log(123);
  }));
}
