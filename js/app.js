/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


game = new Game();
const button = document.getElementById('btn__reset');
button.addEventListener('click', () => {
    game.startGame();
});

const keys = document.getElementById('qwerty');
keys.addEventListener('click', (e) => {
    if (e.target.classList.contains('key'))
        game.handleInteraction(e);
    console.log(e);
});

document.addEventListener('keyup', (e) => {
    const letterOnly = /[a-z]/
    let letter = e;
    let press = document.querySelectorAll('.key');
    const overlay = document.getElementById('overlay');
    console.log(letter)
    if (e.key === 'Enter' && overlay.style.display != 'none') {
        game.startGame();
    }
    if (letterOnly.test(letter.key)) {
        for (let i = 0; i < press.length; i++) {
            if (letter.key === press[i].innerText) {
                console.log(press[i]);
                game.handleInteractionKeyUp(press[i]);
            }
        }
    };
})
