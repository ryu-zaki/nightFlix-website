
/* variables */
const img = document.querySelector('.img');
const crossBtn = document.querySelector('[data-cross]');
const logBtn1 = document.querySelector('[data-log]');
const modal = document.querySelector('[data-modal]');
const signBtn = document.querySelector('[data-sign]'); 
const signBtn2 = document.querySelector('[data-signUp]');
const logCon = document.querySelector('[data-container]');
const menuBtn = document.getElementById('menu');
const visibility = document.querySelector('[data-visibility]');
const visibilityNone = document.querySelector('[data-toggle-cross]');

let i = 0;

function myFunction() {
    
  const arr = ['data1', 'data2', 'data3', 'data4'];
  if (i === 4) {
    i = 0
  }
  
  img.setAttribute('data-src', arr[i]);
  i++;
}

setInterval(myFunction, 1500);

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

menuBtn.addEventListener('click', () => {
  visibility.setAttribute('data-toggle', 'false');
})

visibilityNone.addEventListener('click', () => {
  visibility.setAttribute('data-toggle', 'true');
})



