// NAVBAR FIXED
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("bar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.toggle("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", function () {
  var header = document.querySelector(".menu");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// GALLERY FUNCTION

function change_image() {
  var x = document.getElementById("changingimage");
  var str = document.getElementById("changingimage").src;
  if (str.includes("slide1.jpeg")) {
    x.src = "../img/slide2.jpeg";
  } else if (str.includes("slide2.jpeg")) {
    x.src = "../img/slide3.jpeg";
  } else if (str.includes("slide3.jpeg")) {
    x.src = "../img/slide4.jpeg";
  } else if (str.includes("slide4.jpeg")) {
    x.src = "../img/slide5.jpeg";
  } else if (str.includes("slide5.jpeg")) {
    x.src = "../img/slide1.jpeg";
  } else {
    x.src = "";
  }
}

// HOVER PART

document.getElementById("link1").style.background = "#fa8072";
document.getElementById("link1").addEventListener("mouseover", function () {
  // document.getElementById("link1").style.background = "#FFFFFF";
  document.getElementById("link1").style.color = "crimson";
});

document.getElementById("link1").addEventListener("mouseout", function () {
  document.getElementById("link1").style.backgroundColor = "#fa8072";
  document.getElementById("link1").style.color = "#FFFFFF";
});

document.getElementById("link2").style.background = "#fa8072";
document.getElementById("link2").addEventListener("mouseover", function () {
  // document.getElementById("link2").style.background = "#FFFFFF";
  document.getElementById("link2").style.color = "crimson";
});

document.getElementById("link2").addEventListener("mouseout", function () {
  document.getElementById("link2").style.backgroundColor = "#fa8072";
  document.getElementById("link2").style.color = "#FFFFFF";
});

document.getElementById("link3").style.background = "#fa8072";
document.getElementById("link3").addEventListener("mouseover", function () {
  // document.getElementById("link3").style.background = "#FFFFFF";
  document.getElementById("link3").style.color = "crimson";
});

document.getElementById("link3").addEventListener("mouseout", function () {
  document.getElementById("link3").style.backgroundColor = "#fa8072";
  document.getElementById("link3").style.color = "#FFFFFF";
});

document.getElementById("link4").style.background = "#fa8072";
document.getElementById("link4").addEventListener("mouseover", function () {
  // document.getElementById("link4").style.background = "#FFFFFF";
  document.getElementById("link4").style.color = "crimson";
});

document.getElementById("link4").addEventListener("mouseout", function () {
  document.getElementById("link4").style.backgroundColor = "#fa8072";
  document.getElementById("link4").style.color = "#FFFFFF";
});

document.getElementById("link5").style.background = "#fa8072";
document.getElementById("link5").addEventListener("mouseover", function () {
  // document.getElementById("link5").style.background = "#FFFFFF";
  document.getElementById("link5").style.color = "crimson";
});

document.getElementById("link5").addEventListener("mouseout", function () {
  document.getElementById("link5").style.backgroundColor = "#fa8072";
  document.getElementById("link5").style.color = "#FFFFFF";
});




// ASSIGNMENT PART

var dict = {};
if (typeof Storage !== "undefined") {
  for (var key in localStorage) {
    try {
      var data = JSON.parse(localStorage.getItem(key));
      if (data.check === "ThisIsFormData") {
        document.getElementById("InsertHere").innerHTML +=
          "<tr><td>" +
          key +
          "</td><td>" +
          data.lastname +
          "</td><td>" +
          data.skill +
          "</td><td>" +
          data.level +
          "</td></tr>";
      }
    } catch (err) {}
  }
}

function validateForm() {
  var x = document.forms["skillform"]["fname"].value;
  if (x == "") {
    alert("Please fill First Name.");
    return false;
  }

  x = document.forms["skillform"]["lname"].value;
  if (x == "") {
    alert("Please fill Last Name.");
    return false;
  }

  x = document.forms["skillform"]["skillname"].value;
  if (x == "") {
    alert("Please fill Skill.");
    return false;
  }

  x = document.forms["skillform"]["proficiency"].value;
  if (x == "") {
    alert("Please fill Proficiency.");
    return false;
  }
  addData();
  reset();
  alert("Thank you!");
  return false;
}

function addData() {
  var firstname = document.forms["skillform"]["fname"].value;
  var lastname = document.forms["skillform"]["lname"].value;
  var skill = document.forms["skillform"]["skillname"].value;
  var level = document.forms["skillform"]["proficiency"].value;
  var check = "ThisIsFormData";
  dict[firstname] = { lastname, skill, level, check };
  if (typeof Storage !== "undefined") {
    localStorage.setItem(firstname, JSON.stringify(dict[firstname]));
  }
  document.getElementById("InsertHere").innerHTML +=
    "<tr><td>" +
    firstname +
    "</td><td>" +
    lastname +
    "</td><td>" +
    skill +
    "</td><td>" +
    level +
    "</td></tr>";
}

function reset() {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("skillname").value = "";
  document.getElementById("level").value = "";
  //document.getElementById
}
