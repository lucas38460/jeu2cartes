const cards = document.querySelectorAll('.cards');
const check = document.querySelectorAll('.red');
let count = 0;

for (let i = 0; i < cards.length; i++) {
  const element = cards[i];
  element.addEventListener('click',()=>{
    cards[i].classList.toggle("red");
    number(check);
  });
}

function number(check) {
    count++;
  const nbrcheck = document.getElementById('nbrcheck').innerHTML = `Vous avez sélectionné ${count} cartes`;
}