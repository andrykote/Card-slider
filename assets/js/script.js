let rightArrow = document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");
let cardArray = Array.from(document.querySelectorAll(".slider__card"));
let arrowsBox = document.querySelector(".arrows-box");

rightArrow.addEventListener("click", onRightAnimation);
leftArrow.addEventListener("click", onLeftAnimation);

function onRightAnimation() {
  let topCard = cardArray[0];
  let bottomCard = cardArray[1];

  arrowsBox.style.display = "none";
  topCard.classList.add("transform-left");
  bottomCard.classList.add("transform-right");

  topCard.addEventListener("animationend", () => {
    topCard.classList.remove("transform-left");
    topCard.classList.remove("top-card");
    topCard.classList.add("bottom-card");
  });

  bottomCard.addEventListener("animationend", () => {
    bottomCard.classList.remove("transform-right");
    bottomCard.classList.remove("bottom-card");
    bottomCard.classList.add("top-card");
    arrowsBox.style.display = "flex";
  });
  cardArray.push(cardArray.shift());
}

function onLeftAnimation() {
  let topCard = cardArray[0];
  let bottomCard = cardArray.at(-1);

  arrowsBox.style.display = "none";
  topCard.classList.add("transform-right-reverse");
  bottomCard.classList.add("transform-left-reverse");

  topCard.addEventListener("animationend", () => {
    topCard.classList.remove("transform-right-reverse");
    topCard.classList.remove("top-card");
    topCard.classList.add("bottom-card");
  });

  bottomCard.addEventListener("animationend", () => {
    bottomCard.classList.remove("transform-left-reverse");
    bottomCard.classList.remove("bottom-card");
    bottomCard.classList.add("top-card");
    arrowsBox.style.display = "flex";
  });

  cardArray.unshift(cardArray.pop());
}
