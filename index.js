
//A function to make the cards turn. The eventlistner wait for user input (a click) and then turns the card.
window.onload = function() {
    const cards = document.querySelectorAll(".card");
    for (let card of cards) {
      card.addEventListener("click", function() {
        card.classList.toggle("flipped");
      });
    }
};

