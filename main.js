const cards = document.querySelectorAll(".cards");
let count = 0;

for (let i = 0; i < cards.length; i++) {
  const element = cards[i];
  element.addEventListener("click", () => {
    cards[i].classList.toggle("red");
    const check = document.querySelectorAll(".red");
    if (element.classList.contains("red")) {
      count++;
      const nbrcheck = (document.getElementById(
        "nbrcheck"
      ).innerHTML = `Vous avez sélectionné ${count} cartes`);
    } else {
      count--;
      const nbrcheck = (document.getElementById(
        "nbrcheck"
      ).innerHTML = `Vous avez sélectionné ${count} cartes`);
    }
  });
}
