const form = document.querySelector('form');
const factDiv = document.querySelector('.number-fact');

const API_URL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/";

form.addEventListener('submit', (e) => {
    const number = e.target.querySelector('input[type="number"]').value;
    const loadText = 'Wait a little bit';

    e.preventDefault();

    factDiv.innerHTML = loadText;
    //res => res.json()은 json형식으로 넘어올때 쓰고 text 형식은 text()로 사용
    fetch(API_URL + number)
    .then(res => res.text())
    .then(data => factDiv.innerHTML = data)
})