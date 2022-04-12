let nav = document.querySelector('.nav');

document.querySelector('#menu-btn').onclick = () =>{
    nav.classList.toggle('active'); 
}

document.querySelector('#close-menu').onclick = () =>{
    nav.classList.remove('active') 
}

window.onscroll = () =>{
    nav.classList.remove('active');

    if(window.scrollY > 60){
       document.querySelector('.header').classList.add('active');
    }else{
       document.querySelector('.header').classList.remove('active');
    }
 }

 let swiper = new Swiper(".container", {
     loop:true,
     spacebetween: 24,
     slidesPerView: 'auto',
     grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  let mixerFeatured = mixitup('.featured_car', {
    selectors: {
        target: '.box'
    },
    animation: {
        duration: 500
    }
});
