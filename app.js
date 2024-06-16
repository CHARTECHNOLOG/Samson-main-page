function auth() {
  var email = document.forms["myform"]["uemail"].value;
  var pass = document.forms["myform"]["pass"].value;
  if (email == "samson@gmail.com" && pass == "123456") {
    window.location.href = "www.google.com";
    alert("Login Successfully");
  } else {
    alert("Wrong Credientials");
  }
}

var loginButton2 = document.getElementById("login__button2");

loginButton2.addEventListener("click", function (e) {
  e.preventDefault();
  var question = document.getElementById("question").value;
  if (question == "dada") {
    var loginButton = document.getElementById("login__button");
    loginButton.href = "www.google.com";
    console.log(loginButton);
  } else {
    alert("Error");
  }
});
