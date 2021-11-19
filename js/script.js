$(document).ready(function(){


	// slick responsive
	$('.center').slick({
	  centerMode: true,
	  centerPadding: '0px',
	  slidesToShow: 3,
	  speed: 700,
	  prevArrow:'<img class="slick-prev" aria-label="Previous" src="images/arrow.png" style="transform: rotate(180deg);">',
      nextArrow:'<img class="slick-next" aria-label="Next" src="images/arrow.png">',
      responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '0px',
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '0px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	// slick responsive
	$('.s-product').slick({
	  slidesToShow: 2,
	  autoplay:true,
	  arrows:false,
	  speed: 1000,
	  prevArrow:'<img class="a-left control-c prev slick-prev" src="images/arrow.png" style="transform: rotate(180deg);">',
      nextArrow:'<img class="a-right control-c next slick-next" src="images/arrow.png">',
      responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerPadding: '0px',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerPadding: '0px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	// modal
	$("#signupform").modal('show');

});
