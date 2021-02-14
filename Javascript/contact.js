function toggleBurger(e){
    e.target.classList.toggle('change');
 
   document.getElementById('contact-burger-menu').classList.toggle('show');
 }
 
 const contactBurger = document.getElementById('contact-burger');
 
 contactBurger.onclick = toggleBurger;