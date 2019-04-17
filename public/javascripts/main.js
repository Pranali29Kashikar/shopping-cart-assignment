
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Login & register
function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email == "xyz@gmail.com" && password == "sabka123") {
    // alert ("Login successfully");
    console.log("welcome");
    window.location.href = "index";
    return false;
  }
  else {
    alert("Email and password are incorrect.");
  }
}

function validate_form() {

  var name = document.getElementById("user_name").value;
  var lname = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("pwd").value;
  var cpassword = document.getElementById("cnpwd").value;
  if (name == '' || lname == '' || email == '' || password == '' || cpassword == '') {
    alert("Please fill all fields...!!!!!!");
  }
  else if ((password.length) < 8) {
    alert("Password should atleast 8 character in length...!!!!!!");
  }
  else if (password != cpassword) {
    alert("Your passwords don't match. Try again?");
  }
  else {
    var registerObj = {
      name: name,
      lname: lname,
      email: email,
      pwd: pwd,
      cnpwd: cnpwd
    };
    var xmlhttp = new XMLHttpRequest();
    var theUrl = "/register_user";
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.onload = function () {
      if (xmlhttp.status == 200) {
        window.location.href = "/index";
      }
    }
    xmlhttp.send(JSON.stringify(registerObj));
    signup(registerObj);
  }
}

function signup(registerObj) {
  var uname = registerObj.name;
  alert("Hello" + " " + uname + " " + "Welcome to Sabka Bazar");
}

// Add and remove item from cart
function plusCounter(plus) {
  var counterAdd = document.getElementById("cart-counter");
  counterAdd.value = parseInt(counterAdd.value) + 1;
  // var counterValue = counterAdd.value;
  // updateItemValue();
}

function minusCounter(minus) {
  var counterminus = document.getElementById("cart-counter");
  counterminus.value = parseInt(counterminus.value) - 1;
  if (parseInt(counterminus.value) == 0) {
    document.getElementById("cartList").innerHTML = '';
  }
}

//update cart value

// function updateItemValue() {
//   var cartItemConatiner = document.getElementsByClassName("cart-item-list")[0];
//   var cartRows = cartItemConatiner.getElementsByClassName("cart-item");
//   var total = 0;
//   for (i = 0; cartRows.length; i++) {
//     var cartRow = cartRows.[i];
//     var priceElement = cartRow.getElementsByClassName("cart-price-element")[0];
//     var quantityElement = cartRow.getElementsByClassName("toatlPrice")[0];
//     var price = priceElement.innerText;
//     var quantity = quantityElement.value;
//     total = total + (price * quantity);
//     console.log(total);
//   }
//   document.getElementsByClassName("toatlPrice")[0].innerText = 'Rs' + total;
// }


