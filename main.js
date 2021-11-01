const input = document.querySelector('input');
const play = document.querySelector('.play');
const restart = document.querySelector('.restart');
const out = document.querySelector('#out');
const gameOver = document.querySelector('.game-over');
const is = document.getElementsByClassName('fa-heart');
const exit = document.querySelector('.exit');
const chanceText = document.querySelector('#chanceText');
const random = Math.floor(Math.random() * 10 + 1);
console.log(random);


function game() {



    const answer = +input.value;
    // is[i].parentNode.removeChild(is[i]);
    // is[0].remove();
    if (answer == random) {
        chanceText.textContent = 'Вы выграли !!!'
            // chanceText.style.color = 'green';

        gameOver.classList.add('active');
        gameOver.style.display = 'block';
        play.style.display = 'none';
        restart.style.display = 'inline-block';


    } else if (is.length == 1) {
        gameOver.style.display = 'block';
        restart.style.display = 'inline-block';
        chanceText.textContent = "Проигрывать";
        is[0].remove();
    } else if (answer == 0) {
        out.textContent = 'заполните все поля';
        out.style.color = 'red';
        is[0].remove();
    } else if (isNaN(answer)) {
        out.textContent = "введите только числа";
        out.style.color = 'red';
        is[0].remove();
    } else if (answer > 10 || answer < 1) {
        out.textContent = 'только от 1 до 10';
        out.style.color = 'red';
        is[0].remove();
    } else if (answer > random) {
        out.textContent = 'Чут меньше';
        out.style.color = 'blue';
        is[0].remove();
    } else if (answer < random) {
        out.textContent = 'Чут больше'
        out.style.color = 'blue';
        is[0].remove();
    } else {
        out.textContent = 'incorred';
        out.style.color = 'orange';

    }
    input.value = ''



}

function reload() {
    gameOver.style.display = 'none';
    document.location.reload()
}



function windowOpen() {
    window.open("https://www.google.com/", "_blank")
}

exit.onclick = windowOpen;
play.onclick = game;
restart.onclick = reload;