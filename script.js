const menuToggle  = document.getElementById('menu-toggle');
const menuLinks = document.querySelector('.nav_list');


menuToggle.addEventListener('click', () =>{
    menuLinks.classList.toggle('active');
});