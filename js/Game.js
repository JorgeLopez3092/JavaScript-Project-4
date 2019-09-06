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
             {phrase: "Where's the tank"},
             {phrase: "This aint my first rodeo"},
             {phrase: "Cup of Joe"},
             {phrase: "Curiousity killed the cat"},
             {phrase: "Cut to the chase"},
         ]
         return phrases
     }

     getRandomPhrase() {
         let i = Math.floor(Math.random() * 5);
         return this.phrases[i];
     }
 }