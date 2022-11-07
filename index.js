import { flipCard } from "./flipCard.js";
import { coincidence } from "./coincidence.js";
import noMore from "./noMore.js";
import unflipCards from "./unFlipCards.js";
import updateGameWindow from "./updateGameWindow.js";
import { random } from "./random.js";

const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let blockCard = false;
let firstCard, secondCard;


function makeCounter() {
    let counter = 0;
      for (let i=0; i<cards.length; i++) {
        let btn = cards[i];
        btn.onclick = function() {
          counter ++;
          btn.innerHTML = counter;
        }
      }
  }
cards.forEach(card => card.addEventListener('click', flipCard));
