
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
const cardH2 = document.querySelector('.login-signup');

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
   logCon.style.display = "block";
   cardH2.innerHTML = "Log in";
});

signBtn.addEventListener('click', () => {
   signBtn2.style.display = "block";
   logCon.style.display = "none";
   cardH2.innerHTML = "Sign up";
})

menuBtn.addEventListener('click', () => {
  visibility.setAttribute('data-toggle', 'false');
})

visibilityNone.addEventListener('click', () => {
  visibility.setAttribute('data-toggle', 'true');
})

/* Sign-up System */
const firstName = document.getElementById('userSign');
const email = document.getElementById('email');
const password = document.getElementById('passwordSign');
const signButton = document.querySelector('[data-signBtn]');

const popupCon = document.querySelector('[data-popup-con]');
const popupBox = document.querySelector('[data-popup]');
const symbolPop = document.querySelector('[data-symbol-popup]');
const paraPop = document.querySelector('[data-para]');
const xbtnSign = document.querySelector('[data-popupX]');

signButton.addEventListener('click', () => {
  
  if (firstName.value == "" || email.value == "" || password.value == "") {
    popupCon.setAttribute('data-popup-con', 'true');
    popupBox.setAttribute('data-popup', 'true');

    symbolPop.innerHTML = "X";
    symbolPop.style.color = "red";
    paraPop.innerHTML = "Please complete the required information";
    return;
  }

  else {
    localStorage.setItem(`userName`, firstName.value);
    localStorage.setItem(`password`, password.value);

    popupCon.setAttribute('data-popup-con', 'true');
    popupBox.setAttribute('data-popup', 'true');
    symbolPop.innerHTML = "✓";
    symbolPop.style.color = "#2ecc71";
    paraPop.innerHTML = "Succesfully signed up!";

    modal.style.display = "flex";
    signBtn2.style.display = "none";
    logCon.style.display = "block";
    cardH2.innerHTML = "Log in";

    firstName.value = "";
    password.value = "";
    email.value = "";
  }
})

/* Log in System */
const userLog = document.querySelector('[data-userName]');
const passLog = document.querySelector('[data-password]');
const logBtn = document.querySelector('[data-logBtn]');
const genreBtn = document.querySelector('[data-genre]');
const logoutBtn = document.querySelector('[data-logout]');
const logoutCon = document.querySelector('[data-logoutCon]');
const loginCon = document.querySelector('[data-loginCon]');


if (localStorage.checker) {
  loginCon.style.display = "none";
  logoutCon.style.display = "block";
}

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('checker');
  popupCon.setAttribute('data-popup-con', 'true');
  popupBox.setAttribute('data-popup', 'true');
  symbolPop.innerHTML = "✓";
  symbolPop.style.color = "#2ecc71";
  paraPop.innerHTML = "Successfully logged out.";

  loginCon.style.display = "block";
  logoutCon.style.display = "none";

})

logBtn.addEventListener('click', () => {
  let userInfo = localStorage.getItem(`userName`);
  let userPass = localStorage.getItem(`password`);

  if (userLog.value == userInfo && passLog.value == userPass) {
    localStorage.setItem('checker', true);
    popupCon.setAttribute('data-popup-con', 'true');
    popupBox.setAttribute('data-popup', 'true');
    symbolPop.innerHTML = "✓";
    symbolPop.style.color = "#2ecc71";
    paraPop.innerHTML = "Sucessfully logged in!"; 

    modal.style.display = "none";
    signBtn2.style.display = "none";
    logCon.style.display = "none";

    loginCon.style.display = "none";
    logoutCon.style.display = "block";
    return; 
  } 

  else {
    popupCon.setAttribute('data-popup-con', 'true');
    popupBox.setAttribute('data-popup', 'true');
    symbolPop.innerHTML = "X";
    symbolPop.style.color = "#2ecc71";
    paraPop.innerHTML = "You don't have an account, try to sign-up";
  }
})

genreBtn.addEventListener('click', () => {
  if (localStorage.checker) {
    genreBtn.setAttribute('href', 'page2.html');
    genreBtn.click();
    return;
  }
  else {
    popupCon.setAttribute('data-popup-con', 'true');
    popupBox.setAttribute('data-popup', 'true');
    symbolPop.innerHTML = "X";
    symbolPop.style.color = "#2ecc71";
    paraPop.innerHTML = "You must log in first!";
    return;
  }
})

xbtnSign.addEventListener('click', () => {
  popupCon.setAttribute('data-popup-con', 'false');
  popupBox.setAttribute('data-popup', 'false');

  userLog.value = "";
  passLog.value = "";
})