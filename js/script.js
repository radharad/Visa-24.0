

/* Home Slider Section Start */

$('.home-section').slick({
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed: 3000,
    speed:3000,
    infinite:true,
    fade: true,
    cssEase: 'linear',
    dots:true,
    arrows:true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    // responsive: [
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       arrows: false,
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //     }
    //   }
    // ]
  });
  
  /* Home Slider Section End */

  /* Choose Slider Section Start */

$('.choose-slider').slick({
  slidesToShow: 4,
  slidesToScroll:1,
  autoplay:false,
  autoplaySpeed: 2500,
  speed:2500,
  infinite:true,
  dots:true,
  arrows:false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow:2,
        slidesToScroll:1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
      }
    }
  ]
});

/* Choose Slider Section End */

/* Testimonial Slider Section Start */

$('.testimonial-slider').slick({
  slidesToShow: 1,
  slidesToScroll:1,
  autoplay:true,
  autoplaySpeed: 2500,
  speed:2500,
  infinite:true,
  dots:true,
  arrows:false,
});

/* Testimonial Slider Section End */

/* Payment code copy start */

function copyText() {
  var defaultInput = document.getElementById("defaultInput");
  defaultInput.select();
  
  try {
      var successful = document.execCommand('copy');
      var message = successful ? 'successful' : 'unsuccessful';
      alert('Copied');
  } catch (err) {
      // console.error('Unable to copy text');
  } 
  window.getSelection().removeAllRanges();
}

/* Payment code copy end */

/* scroll to top button start */  
myButton = document.getElementById("myBtn")
window.onscroll = function(){
scrollFunction()
}
function scrollFunction(){
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  myButton.style.display = "block"
}else{
  myButton.style.display = "none"
}
}

function topFunction(){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0 
}
/* scroll to top button end */