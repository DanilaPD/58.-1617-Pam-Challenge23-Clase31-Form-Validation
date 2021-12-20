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

const validate = () => {
  console.log("Here, validating the form!");
  const user = username.value.trim();

  if (user === "") {
    let errorMessage = "This space cannot remain empty!";
    inputError(username, errorMessage);
  } else if (user.length < 2 || user.length > 30) {
    let errorMessage = "The username must have between 2 and 30 characters!";
    inputError(username, errorMessage);
  } else {
    inputSuccess(username);
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
