let menuBtn = document.querySelector('#menu-btn');
let sideBar = document.querySelector('.side-bar');
let navbar = document.querySelector('.side-bar .navbar');
let closeBtn = document.querySelector('#close-btn');

menuBtn.onclick = () =>{
   sideBar.classList.toggle('active');
}

closeBtn.onclick = () =>{
   sideBar.classList.remove('active');
}

let searchForm = document.querySelector('.header .flex .search-form');
let searchToggler = document.querySelector('#search-toggler');

searchToggler.onclick = () =>{
   searchForm.classList.toggle('active');
}

let header = document.querySelector('.header');

window.onscroll = () =>{
   searchForm.classList.remove('active');

   if(window.scrollY > 0){
      header.classList.add('active');
   }else{
      header.classList.remove('active')
   }
}

window.onclick = (e) =>{
   if(!navbar.contains(e.target) && e.target !== menuBtn){
      sideBar.classList.remove('active');
   }

   if(!searchForm.contains(e.target) && e.target !== searchToggler){
      searchForm.classList.remove('active');
   }
}

let list_items = document.querySelectorAll('.filter .list .item');

list_items.forEach(items => {

   items.onclick = () =>{

      list = items.parentElement.parentElement;
      output = list.querySelector('.output');

      output.value = items.innerHTML;
   }

});

var swiper = new Swiper('.hero-slider', {
   loop: true,
   grabCursor:true,
 
   pagination: {
     el: '.swiper-pagination',
     clickable:true,
     dynamicBullets: true,
   },
 
   scrollbar: {
     el: '.swiper-scrollbar',
   },
});

var swiper = new Swiper(".trending-slider", {
   slidesPerView: "auto",
   spaceBetween: 20,
   loop: true,
   grabCursor: true,
   autoplay: {
      delay: 2000,
      disableOnInteraction: false,
   },
});
// ================= ANIME DYNAMIC SYSTEM =================

// only run on watch page
if (window.location.pathname.includes("watch.html")) {

   const params = new URLSearchParams(window.location.search);
   const id = params.get("id");
   const ep = params.get("ep");

   fetch("data/anime.json")
      .then(res => res.json())
      .then(data => {

         const anime = data.find(a => a.id === id);

         if (!anime) return;

         const episode = anime.episodes.find(e => e.ep == ep);

         if (!episode) return;

         // change video
         document.querySelector("video").src = episode.servers[0];

         // change title
         document.querySelector(".video p").innerText =
            anime.title + " Episode " + ep + " [Sub]";

      })
      .catch(err => console.log(err));
}
