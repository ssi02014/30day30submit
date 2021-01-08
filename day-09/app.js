const text = document.querySelector('.text');
const readMoreBtn = document.querySelector('.read-more-btn');

readMoreBtn.addEventListener('click', () => {
    text.classList.toggle('show-more');

    if (readMoreBtn.innerHTML === 'Read More') {
        readMoreBtn.innerHTML = 'Read Less';
    } else if (readMoreBtn.innerHTML === 'Read Less') {
        readMoreBtn.innerHTML = 'Read More';
    }
})