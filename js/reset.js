const save = document.querySelector(".save");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");

const password = document.querySelector(".pass");
const confirm = document.querySelector(".confirm");

// save.addEventListener("click", () => {
//   if (password.value === confirm.value) {
//     modal.classList.toggle("open");
//   }
//   else {
//       alert("password in not matched")
//   }
// })

modal.addEventListener("click", () => {
  modal.classList.remove("open");
});

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

/////////////////

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-message");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
};

const checkInfo = () => {
  if (password.value === "" || password.value.length < 8) {
    setError(
      password,
      "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters."
    );
  } else {
  }

  if (password.value === confirm.value) {
    let email = JSON.parse(localStorage.getItem("tempt"));
    let listUser = JSON.parse(localStorage.getItem("user"));
    listUser.filter((user) => {
      if (user.email === email) {
        user.password = password.value;
        localStorage.setItem("user", JSON.stringify(listUser));
        localStorage.removeItem('tempt')
      }
    });
  } else {
    setError(confirm, "Password doesn't match");
  }

  if (
    // password.value !== "" ||
    password.value.length >= 8 &&
    password.value === confirm.value
  ) {
    modal.classList.toggle("open");
  }
};
save.addEventListener("click", checkInfo);



if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  if (localStorage.getItem("user") === null || localStorage.getItem("user") === undefined) {
    window.location.assign("http://127.0.0.1:5500/reset.html");
  } else {
    window.location.assign("http://127.0.0.1:5500/home.html");
  }
}
