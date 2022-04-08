const sendBtn = document.querySelector(".send-a");

const email = document.querySelector(".email");

function isEmail() {
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email.value)) {
    email.focus;
    return false;
  } else {
    return true;
  }
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-message");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
};

const setEmailString = (email) => {
  let emailString = email;
  return emailString;

}

const checkInfo = () => {
  // setEmailString(user.email)
  if (email.value === "") {
    setError(email, "Email is required");
  } else if (!isEmail(email.value)) {
    setError(email, "Provide a valid email address");
  }

  if (isEmail(email.value)) {
    var listUser = JSON.parse(localStorage.getItem("user"));
    listUser.filter((user) => {
      if (user.email === email.value) {
        localStorage.setItem("tempt", JSON.stringify(user.email))
        window.location = "http://127.0.0.1:5500/resetPass.html";
      } else {
        setError(email, "Email does not exist");
      }
    });
  }
};

sendBtn.addEventListener("click", checkInfo);




if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  if (localStorage.getItem("user") === null) {
    window.location.assign("http://127.0.0.1:5500/forgot.html");
  } else {
    window.location.assign("http://127.0.0.1:5500/home.html");
  }
}
