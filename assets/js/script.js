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
const suPhoneInputBx = document.getElementById("signupPhoneInputBox");
const suSubmitBtn = document.getElementById("signupBtn");

lgSubmitBtn.addEventListener("click", () => {
  event.preventDefault();
  submitForm(lgUserInputBx, lgPassInputBx);
});

suSubmitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  submitForm(suUserInputBx, suPhoneInputBx, suPassInputBx);
});

submitForm = (username, phone, password, event) => {
  if (username.value === "") {
    alert("Please enter your username.");
    username.focus();
  } else if (phone.value === "") {
    alert("Please enter your phone number.");
    phone.focus();
  } else if (password.value === "") {
    alert("Please enter your password.");
    password.focus();
  }
};
const togglePassIconVisibility = (inputBox, showPassIcon, hidePassIcon) => {
  if (inputBox.getAttribute("type") === "password") {
    hidePassIcon.style.display = "block";
    showPassIcon.style.display = "none";
  } else {
    showPassIcon.style.display = "block";
    hidePassIcon.style.display = "none";
  }
};
const removePassIconVisibility = (inputBox, showPassIcon, hidePassIcon) => {
  showPassIcon.style.display = "none";
  hidePassIcon.style.display = "none";
};

const addToggleListener = (inputBox, showPassIcon, hidePassIcon) => {
  showPassIcon.addEventListener("click", () => {
    inputBox.setAttribute("type", "password");
    togglePassIconVisibility(inputBox, showPassIcon, hidePassIcon);
    inputBox.focus();
  });
  hidePassIcon.addEventListener("click", () => {
    inputBox.setAttribute("type", "text");
    togglePassIconVisibility(inputBox, showPassIcon, hidePassIcon);
    inputBox.focus();
  });
};

const loginShowPass = document.getElementById("loginShowPass");
const loginHidePass = document.getElementById("loginHidePass");

const signupShowPass = document.getElementById("signupShowPass");
const signupHidePass = document.getElementById("signupHidePass");

addToggleListener(lgPassInputBx, loginShowPass, loginHidePass);
addToggleListener(suPassInputBx, signupShowPass, signupHidePass);

const passContainers = document.querySelectorAll(
  "#loginPassContainer, #signupPassContainer"
);

passContainers.forEach((passContainer) => {
  passContainer.addEventListener("mouseover", () => {
    togglePassIconVisibility(lgPassInputBx, loginShowPass, loginHidePass);
    togglePassIconVisibility(suPassInputBx, signupShowPass, signupHidePass);
  });
  passContainer.addEventListener("mouseout", () => {
    removePassIconVisibility(lgPassInputBx, loginShowPass, loginHidePass);
    removePassIconVisibility(suPassInputBx, signupShowPass, signupHidePass);
  });
});
