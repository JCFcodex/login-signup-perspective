const loginContainer = document.getElementById("loginContainer");
const signupLink = document.getElementById("signupLink");

const signupContainer = document.getElementById("signupContainer");
const loginLink = document.getElementById("loginLink");

signupLink.addEventListener("click", () => {
  toggler(signupContainer, loginContainer);
});
loginLink.addEventListener("click", () => {
  toggler(loginContainer, signupContainer);
});

toggler = (toggleActive, removeActive) => {
  toggleActive.classList.add("active");
  removeActive.classList.remove("active");
};

const lgUserInputBx = document.getElementById("loginUsernameInputBox");
const lgPassInputBx = document.getElementById("loginPasswordInputBox");
const lgSubmitBtn = document.getElementById("loginBtn");

const suUserInputBx = document.getElementById("signupUsernameInputBox");
const suPassInputBx = document.getElementById("signupPasswordInputBox");
const suSubmitBtn = document.getElementById("signupBtn");

suSubmitBtn.addEventListener("click", () => {
  submitForm(suUserInputBx, suPassInputBx);
});

lgSubmitBtn.addEventListener("click", () => {
  submitForm(lgUserInputBx, lgPassInputBx);
});

submitForm = (username, password) => {
  if (username.value === "") {
    alert("Please enter your username.");
    username.focus();
  } else if (password.value === "") {
    alert("Please enter your password.");
    password.focus();
  }
};
