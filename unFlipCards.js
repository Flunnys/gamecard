import updateGameWindow from "./updateGameWindow.js";
export default function unflipCards() { 
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    updateGameWindow();
  }, 1500);
}