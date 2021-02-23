const clock = document.querySelector('.clock');
const buttons = document.querySelectorAll('.format button');

let format;

function generateTime() {
    const date = new Date();
    let [hour, min, sec] = [date.getHours(), date.getMinutes(), date.getSeconds()];

    format = clock.getAttribute('data-format');

    if (format === '12') {
        hour = (hour > 12) ? hour % 12 : hour;
    }

    hour >= 10 ? hour : hour = `0${hour}`;
    min >= 10 ? min : min = `0${min}`;
    sec >= 10 ? sec : sec = `0${sec}`;

    clock.innerHTML = `<h1> ${hour} : ${min} : ${sec} AM </h1>`
}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        format = button.getAttribute('data-format');
        clock.setAttribute('data-format', format);
        generateTime();
    })
})

setInterval(generateTime, 1000);