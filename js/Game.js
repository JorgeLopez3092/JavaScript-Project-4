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
             {phrase: "Wheres the tank"},
             {phrase: "This aint my first rodeo"},
             {phrase: "Cup of Joe"},
             {phrase: "Curiousity killed the cat"},
             {phrase: "Cut to the chase"},
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
         this.activePhrase = randomPhrase;
         console.log(this.activePhrase)
         let phrase = new Phrase(randomPhrase.phrase);
         console.log(phrase.phrase)
         phrase.addPhraseToDisplay();
         console.log('phrase added!')
     }
 }