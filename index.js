window.onload = function() {
    const cards = document.querySelectorAll(".card");
    for (let card of cards) {
      card.addEventListener("click", function() {
        card.classList.toggle("flipped");
      });
    }
};

