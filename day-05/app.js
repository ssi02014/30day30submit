const timer = document.querySelector('.timer h1');
let timeSecond = 5;

displayTime(timeSecond);

let countDown = setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);

    if (timeSecond < 0 ) {
        timer.innerHTML = "Time Over";
        clearInterval(countDown);
    }
},1000);

function displayTime(second){
    const min = Math.floor(second / 60); //second = 5, min = 0
    const sec = Math.floor(second % 60); //second = 5, sec = 5
    timer.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}
