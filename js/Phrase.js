/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        let divPhrase = document.querySelector('#phrase ul');

        for (let letter in phrase.phrase) {
             let li = document.createElement('li');
             if(this.phrase[letter] !== ' ')    {
                li.classList.add('hide', 'letter', this.phrase[letter]);
                li.innerHTML = this.phrase[letter];
                console.log('letter!', this.phrase[letter])
             }  else {
                li.classList.add('space');
                console.log('space!')
             }
             divPhrase.append(li);
        }
    }
}