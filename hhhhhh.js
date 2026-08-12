const hamburger = document.querySelector('.container .top .link .hamburger input');
const navnya = document.querySelector('.container .top .link ul');

hamburger.addEventListener('click', function (){
    navnya.classList.toggle('slide')
})