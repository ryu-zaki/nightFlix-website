const menuBtn2 = document.getElementById('menu2');
const visibility = document.querySelector('[data-visibility]');
const btnLeft = document.querySelector('[data-button-left]');
const btnRight = document.querySelector('[data-button-right]');
const movieCon = document.querySelector('.movies-container');
const divEl = movieCon.getElementsByTagName('div');
const input = document.getElementById('input');
const searchBtn = document.querySelector('[data-search]');

/*Search bar functionality*/

searchBtn.addEventListener('click', () => {
  const value = input.value;
  searchBtn.setAttribute('href', `#${value.toUpperCase()}`);
  searchBtn.click();
  input.value = "";
  
})

let slide = 0;

btnRight.addEventListener('click', () => {
  slide += 10;
  if (slide >= 98) {
   slide = 98;
  }

   for (let i = 0; i < divEl.length; i++) {
    divEl[i].style.transform = `translateX(-${slide}em)`;
   }
   
})

btnLeft.addEventListener('click', () => {
  slide -= 10;
  if (slide <= 0) {
    slide = 0;
  }
  for (let i = 0; i < divEl.length; i++) {
   divEl[i].style.transform = `translateX(-${slide}em)`;
  }
  
})  

/* horror section */


const btnLeft2 = document.querySelector('[data-button-left2]');
const btnRight2 = document.querySelector('[data-button-right2]');
const movieCon2 = document.querySelector('[data-container-img]');
const divEl2 = movieCon2.getElementsByTagName('div');

let slide2 = 0;

btnRight2.addEventListener('click', () => {
  slide2 += 10;
  if (slide2 >= 98) {
   slide2 = 98;
  }

   for (let i = 0; i < divEl2.length; i++) {
    divEl2[i].style.transform = `translateX(-${slide2}em)`;
   }
   
})

btnLeft2.addEventListener('click', () => {
  slide2 -= 10;
  if (slide2 <= 0) {
    slide2 = 0;
  }
  for (let i = 0; i < divEl2.length; i++) {
   divEl2[i].style.transform = `translateX(-${slide2}em)`;
  }
  
}) 

/* adventure section */


const btnLeft3 = document.querySelector('[data-button-left3]');
const btnRight3 = document.querySelector('[data-button-right3]');
const movieCon3 = document.querySelector('[data-container2]');
const divEl3 = movieCon3.getElementsByTagName('div');

let slide3 = 0;

btnRight3.addEventListener('click', () => {
  slide3 += 10;
  if (slide3 >= 98) {
   slide3 = 98;
  }

   for (let i = 0; i < divEl3.length; i++) {
    divEl3[i].style.transform = `translateX(-${slide3}em)`;
   }
   
})

btnLeft3.addEventListener('click', () => {
  slide3 -= 10;
  if (slide3 <= 0) {
    slide3 = 0;
  }
  for (let i = 0; i < divEl3.length; i++) {
   divEl3[i].style.transform = `translateX(-${slide3}em)`;
  }
  
}) 

/* Fantasy section */

const btnLeft4 = document.querySelector('[data-button-left4]');
const btnRight4 = document.querySelector('[data-button-right4]');
const movieCon4 = document.querySelector('[data-container3]');
const divEl4 = movieCon4.getElementsByTagName('div');

let slide4 = 0;

btnRight4.addEventListener('click', () => {
  slide4 += 10;
  if (slide4 >= 98) {
   slide4 = 98;
  }

   for (let i = 0; i < divEl4.length; i++) {
    divEl4[i].style.transform = `translateX(-${slide4}em)`;
   }
   
})

btnLeft4.addEventListener('click', () => {
  slide4 -= 10;
  if (slide4 <= 0) {
    slide4 = 0;
  }
  for (let i = 0; i < divEl4.length; i++) {
   divEl4[i].style.transform = `translateX(-${slide4}em)`;
  }
  
})

/* Historical section */

const btnLeft5 = document.querySelector('[data-button-left5]');
const btnRight5 = document.querySelector('[data-button-right5]');
const movieCon5 = document.querySelector('[data-container4]');
const divEl5 = movieCon5.getElementsByTagName('div');

let slide5 = 0;

btnRight5.addEventListener('click', () => {
  slide5 += 10;
  if (slide5 >= 98) {
   slide5 = 98;
  }

   for (let i = 0; i < divEl5.length; i++) {
    divEl5[i].style.transform = `translateX(-${slide5}em)`;
   }
   
})

btnLeft5.addEventListener('click', () => {
  slide5 -= 10;
  if (slide5 <= 0) {
    slide5 = 0;
  }
  for (let i = 0; i < divEl5.length; i++) {
   divEl5[i].style.transform = `translateX(-${slide5}em)`;
  }
  
})


/* log in section */


/* variables */
const img = document.querySelector('.img');
const crossBtn = document.querySelector('[data-cross]');
const logBtn1 = document.querySelector('[data-log]');
const modal = document.querySelector('[data-modal]');
const signBtn = document.querySelector('[data-sign]'); 
const signBtn2 = document.querySelector('[data-signUp]');
const logCon = document.querySelector('[data-container]');
const visibility1 = document.querySelector('[data-visibility]');
const menuBtn = document.getElementById('menu2');
const visibilityNone = document.querySelector('[data-toggle-cross]');


crossBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

logBtn1.addEventListener('click', () => {
   modal.style.display = "flex";
   signBtn2.style.display = "none";
   logCon.style.display = "flex";
});

signBtn.addEventListener('click', () => {
   signBtn2.style.display = "flex";
   logCon.style.display = "none";
})


visibilityNone.addEventListener('click', () => {
  visibility1.setAttribute('data-toggle', 'true');
})

menuBtn.addEventListener('click', () => {
  visibility.setAttribute('data-toggle', 'false');
})

/* jumping on the top of the window*/
const arrow = document.querySelector('.arrow-up-none');

function myScroll() {
  arrow.classList.remove('arrow-up');
 }

window.addEventListener('scroll', () => {
  arrow.classList.add('arrow-up');

  setTimeout(myScroll, 5000)
}) 

/* Genres list*/
const genresCon = document.querySelector('.genres-container');
const genresCross = document.querySelector('[data-cross-genres]');
const genresBtn = document.querySelector('[data-genres]');

genresBtn.addEventListener('click', () => {
  genresCon.removeAttribute('data-genres-hide');
  genresCon.setAttribute('data-genres-visible', null);
})

genresCross.addEventListener('click', () => {
  genresCon.removeAttribute('data-genres-visible');
  genresCon.setAttribute('data-genres-hide', null);
})



