var hamburger = document.getElementById("hamburger");
var navbar = document.getElementById("menu");

hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
});