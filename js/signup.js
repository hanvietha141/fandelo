// // ===========Logup=============

const modal = document.querySelector(".modal");
const signUp = document.querySelector(".sign-up-btn");
const modalContainer = document.querySelector(".modal-container");

function isEmail() {
  var email = document.getElementById("email-register");
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email.value)) {
    email.focus;
    return false;
  } else {
    return true;
  }
}

modal.addEventListener("click", () => {
  modal.classList.remove("open");
});

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

// =======================

const email = document.querySelector("#email-register");
const password = document.querySelector("#pass-register");
const passwordConfirm = document.querySelector("#pass-register-confirm");
const signUpBtn = document.querySelector(".sign-up-btn");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-message");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
};

const checkInfo = () => {
  if (email.value === "") {
    setError(email, "Email is required");
  } else if (!isEmail()) {
    setError(email, "Invalid email address fomart");
  } else {
    // setSuccess(email);
  }

  if (password.value === "" || password.value.length < 8) {
    setError(
      password,
      "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters."
    );
  } else {
  }

  if (password.value === passwordConfirm.value) {
  } else {
    setError(passwordConfirm, "Password doesn't match");
  }

  if (
    isEmail() &&
    password.value.length >= 8 &&
    password.value === passwordConfirm.value
  ) {
    if (localStorage.getItem("user") === null) {
      localStorage.setItem("user", JSON.stringify([]));
      var list = JSON.parse(localStorage.getItem("user"));
      list = [...list, { email: email.value, password: password.value }];
      localStorage.setItem("user", JSON.stringify(list));
      modal.classList.toggle("open");
    } else {
      var list = JSON.parse(localStorage.getItem("user"));
      list.filter((user) => {
        if (user.email == email.value) {
          setError(email, "Email is already exist");
          Break;
        } else {
          list = [...list, { email: email.value, password: password.value }];
          localStorage.setItem("user", JSON.stringify(list));
          modal.classList.toggle("open");
        }
      });
    }
  }
};
signUpBtn.addEventListener("click", checkInfo);


if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  if (localStorage.getItem("user") === null) {
    window.location.assign("http://127.0.0.1:5500/signin.html");
  } else {
    window.location.assign("http://127.0.0.1:5500/home.html");
  }
}
