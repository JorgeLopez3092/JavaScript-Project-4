/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        let divPhrase = document.getElementById('phrase');

        for (let letter in phrase.phrase) {
             let li = document.createElement('li');
             li.classList.add('hide', 'letter', this.phrase[letter]);
             li.innerHTML = this.phrase[letter];
             divPhrase.append(letterLi);
        }
    }
}