export let flipCard = (function () {
  let hasFlippedCard = false;
  let blockCard = false;
  let firstCard, secondCard;
    if (blockCard) return;
    if (this === firstCard) return;

  this.classList.add('flip');

if (!hasFlippedCard) {
  hasFlippedCard = true;
  firstCard = this;
  return;
}

secondCard = this;
blockCard = false;

coincidence();
}) ()