window.addEventListener("load", function(){
    var swiper = new Swiper(".sw-todaypick", {
        //slidesPerView: 1,
        //spaceBetween: 25,
      navigation: {
        nextEl: ".todaypick .sw-next",
        prevEl: ".todaypick .sw-prev",
      },
      loop:true,
      pagination:{
        el:".sw-todaypick-pg",
        clickable: true,
      },
      breakpoints:{
        320:{
            slidesPerView: 1,
            spaceBetween: 25,
    
        },
        760:{
            slidesPerView: 2,
            spaceBetween: 25,
    
        }
      }
    });

})



