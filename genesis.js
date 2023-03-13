const btnHamburger = document.querySelector('.hamburger');
const btnHamburgerLine1 = document.querySelector('.line1');
const btnHamburgerLine2 = document.querySelector('.line2');

function activeHamburger(){
  btnHamburgerLine1.classList.toggle('active_hbgbtn1');
  btnHamburgerLine2.classList.toggle('active_hbgbtn2');
  console.log("??");
}

btnHamburger.addEventListener('click',activeHamburger);