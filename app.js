/////////////////////
// Scroll animation//
/////////////////////
var homelink = document.querySelector('#Accueil_link');
var home = document.querySelector('#Accueil');
var portflink = document.querySelector('#Portfolio_link');
var portf = document.querySelector('#Portfolio');
var contlink = document.querySelector('#Contact_link');
var contlink2 = document.querySelector('#Contact_link2');
var cont = document.querySelector('#Contact');


homelink.addEventListener("click", function(){
  window.scroll({
    top : home.offsetTop,
    left : 0,
    behavior : 'smooth'
  });
});
portflink.addEventListener("click", function(){
  window.scroll({
    top : portf.offsetTop,
    left : 0,
    behavior : 'smooth'
  });
});
contlink.addEventListener("click", function(){
  window.scroll({
    top : cont.offsetTop,
    left : 0,
    behavior : 'smooth'
  });
});
contlink2.addEventListener("click", function(){
  window.scroll({
    top : cont.offsetTop,
    left : 0,
    behavior : 'smooth'
  });
});
