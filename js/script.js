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

   /* ================= BACKEND CONNECTION ================= */

   async function loadAnime() {
      try {
         const res = await fetch("http://localhost:3000/anime");
         const data = await res.json();

         const container = document.querySelector(".posts-container");

         if(!container) return;

         container.innerHTML = "";

         data.forEach(anime => {
            container.innerHTML += `
               <div class="post">
                  <div class="image">
                     <img src="${anime.image}" alt="">
                     <p class="type">TV</p>
                     <p class="caption">SUB</p>
                  </div>
                  <h3>${anime.title}</h3>
               </div>
            `;
         });

      } catch (err) {
         console.log("Error fetching anime:", err);
      }
   }

   loadAnime();

});
