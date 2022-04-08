const email = document.querySelector(".email");
const pass = document.querySelector(".pass");

const loginBtn = document.querySelector(".login-btn");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-message");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
};

const logIn = async () => {
  const data = await axios.post(
    "https://test.fandelo.com/api/portal/app/login",
    {
      deviceId: "4dd96d79227500df7c3cdf8122df1203",
      password: pass.value,
      platformType: 3,
      platformVersion: "1.0",
      pnsToken: "4dd96d79227500df7c3cdf8122df1203",
      username: email.value,
    }
  );
  localStorage.setItem("user", JSON.stringify(data.data.responseData))
  window.location.assign("http://127.0.0.1:5500/home.html")
};

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

const checkInfo = () => {
  if (email.value === "") {
    setError(email, "Email is required");
    // } else if (!isEmail(email.value)) {
    //   setError(email, "Provide a valid email address");
  } else {
    logIn();
  }

  if (pass.value === "") {
    setError(pass, "Password is required");
  } else if (pass.value.length < 8) {
    setError(
      pass,
      "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters."
    );
  }
};

loginBtn.addEventListener("click", checkInfo);

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  if (localStorage.getItem("user") === null) {
    window.location.assign("http://127.0.0.1:5500/signin.html");
  } else {
    window.location.assign("http://127.0.0.1:5500/home.html");
  }
}
