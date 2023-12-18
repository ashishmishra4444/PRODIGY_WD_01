let searchBtn= document.querySelector('#search-btn');
let searchBar = document.querySelector(".search-bar-cont");
let formBtn= document.querySelector('#login-btn');
let loginForm = document.querySelector(".login-cont");
let formClose = document.querySelector("#form-close");
let menu=document.querySelector("#menu");
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


window.onscroll=()=>{
    searchBtn.classList.remove('bx-x');
    searchBar.classList.remove('active');
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

searchBtn.onclick=()=>{
    searchBtn.classList.toggle('bx-x');
    searchBar.classList.toggle('active');
};
formBtn.onclick=()=>{
    loginForm.classList.add('active');
};
formClose.onclick=()=>{
    loginForm.classList.remove('active');
};
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
videoBtn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src= btn.getAttribute('data-src');
        document.querySelector('#video-slider').src =src;
    });
});
// var swiper = new Swiper(".review-slider", {
//     spaceBetween: 20,
//     loop: true,
// });
var swiper = new Swiper(".review-slider", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    loop:true,
    spaceBetween:20,
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints:{
        640 :{
            slidesPerView: 1,
        },
        768 :{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },

    }
  });
  var swiper = new Swiper(".brand-slider", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    loop:true,
    spaceBetween:20,
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints:{
        450 :{
            slidesPerView: 2,
        },
        768 :{
            slidesPerView:3,
        },
        991:{
            slidesPerView:4,
        },
        1200:{
            slidesPerView:5,
        },


    }
  });



// searchBtn.addEventListener('click', () =>{
//     searchBtn.classList.toggle('bx-x');
//     searchBar.classList.toggle('active')
// });
