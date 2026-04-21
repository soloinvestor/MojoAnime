document.addEventListener("DOMContentLoaded", () => {

let menuBtn = document.querySelector('#menu-btn');
let sideBar = document.querySelector('.side-bar');
let closeBtn = document.querySelector('#close-btn');

if(menuBtn){
   menuBtn.onclick = () => {
      sideBar.classList.toggle('active');
   }
}

if(closeBtn){
   closeBtn.onclick = () => {
      sideBar.classList.remove('active');
   }
}

window.onclick = (e) => {
   if(e.target === sideBar){
      sideBar.classList.remove('active');
   }
}

});
