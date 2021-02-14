/*mobile burger menu js*/
function toggleBurger(e){
    e.target.classList.toggle('change');
 
   document.getElementById('about-burger-menu').classList.toggle('show');
 }
 
 const aboutBurger = document.getElementById('about-burger');
 
 aboutBurger.onclick = toggleBurger;