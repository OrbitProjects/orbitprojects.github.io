window.sr = ScrollReveal();
sr.reveal('.anim');

var menu = document.getElementById("menubutton");
menu.addEventListener("mouseover", function() {
  menu.classList.add("fa-caret-down");
  menu.classList.remove("fa-bars");
});

menu.addEventListener("mouseout", function() {
  menu.classList.remove("fa-caret-down");
  menu.classList.add("fa-bars");
});