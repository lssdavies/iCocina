const loginBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const signInArea = document.getElementById("hiddenSignIn");
const signUpArea = document.getElementById("hiddenSignUp");
const backBtn1 = document.getElementById("backBtn1");
const backBtn2 = document.getElementById("backBtn2");

function showLogin() {
  //hide login and sign up buttons on page by adding class to hide element.
  console.log("clicked");
  loginBtn.className = "hideButtons";
  signUpBtn.className = "hideButtons";
  // display hidden form input elements for email address and password login button
  signInArea.className = "showSignIn";
}

function showSignUp() {
  //hide login and sign up buttons on page by adding class to hide element.
  console.log("clicked2");
  loginBtn.className = "hideButtons";
  signUpBtn.className = "hideButtons";
  // display hidden form input elements for email address and password login button
  signUpArea.className = "showSignIn";
}

//function refreshes page if user chooses not to login
function reloadPage() {
  location.reload();
}

loginBtn.addEventListener("click", showLogin);
signUpBtn.addEventListener("click", showSignUp);
backBtn1.addEventListener("click", reloadPage);
backBtn2.addEventListener("click", reloadPage);
