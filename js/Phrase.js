/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        try {
            console.log('hello');
            let divPhrase = document.querySelector('#phrase ul');
            console.log(divPhrase);
            for (let letter in this.phrase) {
                let li = document.createElement('li');
                if (this.phrase[letter] !== ' ') {
                    li.classList.add('hide', 'letter', this.phrase[letter]);
                    li.innerHTML = this.phrase[letter];
                    console.log('letter!', this.phrase[letter])
                } else {
                    li.classList.add('space');
                    console.log('space!')
                }
                divPhrase.append(li);
            }
        } catch (error) {
            throw error;
        }
    }

    checkLetter(letter) {
        let letters = this.phrase.split('');
        if (letters.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

    showMatchedLetter(matchedLetter) {
        const letters = document.querySelectorAll(`#phrase ul .${matchedLetter}`);
        let matches = 0;
        letters.forEach((letter) => {
            letter.classList.remove('hide');
            letter.classList.add('show');
            matches++;
        })
        console.log(matches);
    }
}