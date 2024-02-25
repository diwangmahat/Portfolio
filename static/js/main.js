const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});


//text typing animation
var typed = new Typed(".typing",{
  strings : [
    "Software Engineer",
    "Backend Developer",
    "Application Developer",
    "Hobbywise Singer"
  ],
  typeSpeed : 100,
  backSpeed : 60,
  loop : true
});

var typed2 = new Typed(".typing-2",{
  strings : [
    "Software Engineer",
    "Backend Developer",
    "Application Developer",
    "Hobbywise Singer"
  ],
  typeSpeed : 100,
  backSpeed : 60,
  loop : true
});

