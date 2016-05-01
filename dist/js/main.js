$(document).ready(function(){

	/* SLICK carousel */

	$('.slider-container').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  dots: true,
	  slide: '.slide-panel',
	  rows: 2,
	  slidesPerRow: 2,
	  slidesToShow: 4,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	      	slidesToShow: 4,
	      	rows: 2,
	      	slidesPerRow: 2
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 4,
	      	rows: 2,
	      	slidesPerRow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 4,
	      	rows: 2,
	      	slidesPerRow: 2
	      }
	    }
	  ]
	});

});