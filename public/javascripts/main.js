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


// Cart Funcationality 

//update cart count
function updateCart(item_counter) {
  document.getElementById("cart_count").innerHTML = item_counter;
  document.getElementById("cart-value").innerHTML = "( " + item_counter + " items)";
  updateCheckoutAmount();
}

function buyProduct(id, operation, endpoint) {
  console.log(id, operation, endpoint);
  var url = `http://localhost:3000/cart/${endpoint}/${id}/${operation}`;
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", `${url}`, true);
  xmlHttpReq.onload = function () {
    if (xmlHttpReq.status >= 200 && xmlHttpReq.status < 400) {
      let data = JSON.parse(xmlHttpReq.responseText);
      updateCart(data.item_counter);
    } else {
      console.log("We conected to the server, but it returned an error.");
    }
  }
  xmlHttpReq.onerror = function () {
    console.log("Connection Error");
  }
  xmlHttpReq.send();
}

// Add count
function addCount(id, prodid, price) {
  var input = document.getElementById("prod" + prodid);
  input.value = parseInt(input.value) + 1;
  item_counter = input.value;
  buyProduct(id, 'add', 'addtocart');
  updateTotalCart(prodid, price);
}

// Minus count
function minusCount(id, prodid, price) {
  var input = document.getElementById("prod" + prodid);
  input.value = parseInt(input.value) - 1;
  if (input.value > 0) {
    item_counter = input.value;
    buyProduct(id, 'remove', 'addtocart');
  } else if (input.value <= 0) {
    input.value = 0;
    buyProduct(id, 'remove', 'remove-item');
  }
  updateTotalCart(prodid, price);
}


function updateTotalCart(prodid, price) {
  var input = document.getElementById("prod" + prodid);
  var totalPrice = parseInt(price) * parseInt(input.value);
  document.getElementsByClassName("totalp" + prodid)[0].innerHTML = totalPrice;
  updateCheckoutAmount();
}

function updateCheckoutAmount() {
  var checkoutAccumulation = document.getElementsByClassName("total-price");
  let totalCheckoutPrice = 0;
  for (let i = 0; i < checkoutAccumulation.length; i++) {
    totalCheckoutPrice = totalCheckoutPrice + parseInt(checkoutAccumulation[i].innerHTML);
  }
  console.log(totalCheckoutPrice);
  document.getElementsByClassName("totalPrice")[0].innerHTML = "Rs. " + totalCheckoutPrice + " >";

}
