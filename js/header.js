function openNav() {
  document.querySelector('#overlay').style.height = "100%";
  document.querySelector('.nav_bars').classList.add("hide");
}

function closeNav() {
  document.querySelector('#overlay').style.height = "0%";
  document.querySelector('.nav_bars').classList.remove('hide');
}

window.addEventListener('scroll', function(){
  if(window.scrollY > 800){
    document.querySelector('.nav_bars').classList.add('nav_bg');
  } else {
    document.querySelector('.nav_bars').classList.remove('nav_bg');
  }
});

window.onload = function() {
  document.querySelector('#overlay').style.height = "0%";
 }