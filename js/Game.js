/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    createPhrases() {
        const phrases = [
            { phrase: "Wheres the tank" },
            { phrase: "This aint my first rodeo" },
            { phrase: "Cup of Joe" },
            { phrase: "Curiousity killed the cat" },
            { phrase: "Cut to the chase" },
            { phrase: "The quick brown fox jumps over the lazy dog" },
        ]
        return phrases
    }

    getRandomPhrase() {
        let i = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[i];
    }

    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        let randomPhrase = this.getRandomPhrase();
        let phrase = new Phrase(randomPhrase.phrase);
        this.activePhrase = phrase;
        phrase.addPhraseToDisplay();
        //  console.log('phrase added!')
    }

    checkForWin() {
        let lettersClass = document.querySelectorAll('#phrase ul li');
        let unmatched = 0
        for (let i = 0; i < lettersClass.length; i++) {
            if (lettersClass[i].classList.contains('hide')) {
                unmatched++;
            }
        }
        if (unmatched <= 0) {
            return true;
        } else {
            return false;
        }
    }

    removeLife() {
        let liveHeart = document.querySelector('#scoreboard ol .tries');
        liveHeart.classList.remove('tries');
        liveHeart.firstElementChild.setAttribute('src', 'images/lostHeart.png');
        liveHeart = document.querySelector('#scoreboard ol .tries');
        this.missed += 1;

        if (this.missed >= 5) {
            this.gameOver(false);
            const phrase = document.querySelector('#phrase ul');
            phrase.innerHTML = '';
        }
    }

    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        const gameOverMessage = document.getElementById('game-over-message');
        const phrase = document.querySelector('#phrase ul');
        phrase.innerHTML = '';
        const keys = document.querySelectorAll('.key');
        keys.forEach((key) => {
            key.removeAttribute('disabled')
            key.classList.remove('chosen', 'wrong');
        });
        const restockHealth = document.querySelectorAll('#scoreboard ol li');
        restockHealth.forEach((heart) => {
            heart.classList.add('tries');
            heart.firstElementChild.setAttribute('src', 'images/liveHeart.png');
            this.missed = 0;
        });
        if (gameWon) {
            overlay.className = 'win';
            overlay.style.display = 'initial';
            gameOverMessage.textContent = 'Congratulations!  You\'re very smart!';

        } else if (!gameWon) {
            overlay.className = 'lose';
            overlay.style.display = 'initial';
            gameOverMessage.textContent = 'At a loss for words ;__;';
        }
    }

    handleInteraction(clicked) {
        const letterClicked = clicked.target.innerText;
        const key = clicked.target;
        const phrase = this.activePhrase;
        key.setAttribute('disabled', true);
        console.log(letterClicked);
        if (!phrase.checkLetter(letterClicked)) {
            key.classList.add('wrong');
            this.removeLife();
        } else if (phrase.checkLetter(letterClicked)) {
            key.classList.add('chosen');
            phrase.showMatchedLetter(letterClicked);
            this.checkForWin();
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        }
    }

    handleInteractionKeyUp(pressed) {
        const letterClicked = pressed.innerText;
        const key = pressed;
        const phrase = this.activePhrase;
        const overlay = document.getElementById('overlay');
        console.log(letterClicked);
        if (!key.disabled && overlay.style.display === 'none') {
            key.setAttribute('disabled', true);
            if (!phrase.checkLetter(letterClicked)) {
                key.classList.add('wrong');
                this.removeLife();
            } else if (phrase.checkLetter(letterClicked)) {
                key.classList.add('chosen');
                phrase.showMatchedLetter(letterClicked);
                this.checkForWin();
                if (this.checkForWin()) {
                    this.gameOver(true);
                }
            }
        }
    }
}
