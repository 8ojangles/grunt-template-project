$(document).ready(function(){

	/* SLICK carousel */

	$('.slider-container').slick({

		cssEase: 'ease',
		dots: true,
		prevArrow: '.carousel-prev',
		nextArrow: '.carousel-next',
		infinite: false,
		speed: 300,
		rows: 2,
		slidesPerRow: 2

		// responsive: [
		//   {
		//     breakpoint: 1024,
		//     settings: {
		//     	slidesToShow: 2,
		//     	rows: 2,
		//     	slidesPerRow: 2
		//     }
		//   },
		//   {
		//     breakpoint: 600,
		//     settings: {
		//       slidesToShow: 1,
		//     	rows: 1,
		//     	slidesPerRow: 2
		//     }
		//   },
		//   {
		//     breakpoint: 480,
		//     settings: {
		//       slidesToShow: 1,
		//     	rows: 1,
		//     	slidesPerRow: 1
		//     }
		//   }
		// ]

	});

});