/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const phrase = new Phrase('Life is like a box of chocolates');
// const game = new Game();

//  game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
//     });

// const logPhrase = (phrase) => {
//    console.log(`Phrase - phrase: `, phrase.phrase);
//    };
//    const game = new Game();
//    logPhrase(game.getRandomPhrase());
//    logPhrase(game.getRandomPhrase());
//    logPhrase(game.getRandomPhrase());
//    logPhrase(game.getRandomPhrase());
//    logPhrase(game.getRandomPhrase());

// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
// let game;
// const button = document.getElementById('btn__reset');
// button.addEventListener('click', (e) => {
//     game = new Game();
//     game.startGame();
// });