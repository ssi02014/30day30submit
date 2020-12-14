const content = document.querySelector('.contents');
const btn = document.querySelector('.btn');
document.addEventListener('DOMContentLoaded', getJoke);

const API_URL = 'https://icanhazdadjoke.com/';

//addEventListerner()에서 두번째 인자 함수 실행에서 () <- 빼야함
btn.addEventListener('click', getJoke);


function getJoke() {
    fetch(API_URL, {
        headers: {
            'Accept' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        content.innerHTML = data.joke;
    });
}

// async/await

// async function getJoke() {
//     const jokeData = await fetch(API_URL, {
//         headers: {
//             'Accept' : 'application/json',
//         }
//     });
//     const jokeObj = await jokeData.json();
//     content.innerHTML = jokeObj.joke;
// }