const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const favInstrument = document.getElementById("favInstrument");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("I've just pressed the 'submit' button!");
  validate();
});

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

const password1Regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

favInstrument.selectedIndex = -1;

const validate = () => {
  console.log("Here, validating the form!");
  const userName = username.value.trim();
  const mailAccount = email.value.trim();
  const pass1 = password1.value.trim();
  const pass2 = password2.value.trim();
  const instrument = favInstrument.value;

  if (userName === "") {
    let errorMessage = "This space cannot remain empty!";
    inputError(username, errorMessage);
  } else if (userName.length < 2 || userName.length > 30) {
    let errorMessage = "The username must have between 2 and 30 characters!";
    inputError(username, errorMessage);
  } else {
    inputSuccess(username);
  }

  if (mailAccount === "") {
    let errorMessage = "This space cannot remain empty!";
    inputError(email, errorMessage);
  } else if (!emailRegex.test(mailAccount)) {
    let errorMessage = "This email account is not valid!";
    inputError(email, errorMessage);
  } else {
    inputSuccess(email);
  }

  if (instrument === "") {
    let errorMessage = "Select an instrument!";
    inputError(favInstrument, errorMessage);
  } else {
    inputSuccess(favInstrument);
  }

  if (pass1 === "") {
    let errorMessage = "This space cannot remain empty!";
    inputError(password1, errorMessage);
  } else if (!password1Regex.test(pass1)) {
    let errorMessage =
      "This is not a valid password. It should have, at least, 8 characters, one upper case letter, one lower case letter and two numbers.";
    inputError(password1, errorMessage);
  } else {
    inputSuccess(password1);
  }

  if (pass2 === "") {
    let errorMessage = "This space cannot remain empty!";
    inputError(password2, errorMessage);
  } else if (pass2 !== pass1) {
    let errorMessage = "The passwords do not coincide.";
    inputError(password2, errorMessage);
  } else {
    inputSuccess(password2);
  }
};

const inputSuccess = (input) => {
  const inputParent = input.parentElement;
  const small = inputParent.querySelector("small");
  inputParent.classList.add("success");
  inputParent.classList.remove("error");
  small.innerHTML = "";
  console.log("Success!");
};

const inputError = (input, message) => {
  const inputParent = input.parentElement;
  const small = inputParent.querySelector("small");
  inputParent.classList.add("error");
  inputParent.classList.remove("success");
  small.innerHTML = message;
  small.classList.add("error");
  console.log("Error!");
};
