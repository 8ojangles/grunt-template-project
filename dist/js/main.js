$(document).ready(function(){

	/* SLICK carousel */

	$('.slider-container').slick({

		cssEase: 'ease',
		dots: true,
		prevArrow: '.carousel-prev',
		nextArrow: '.carousel-next',
		infinite: false,
		speed: 300,
		rows: 1,
		slidesPerRow: 1,
		responsive: [
			{
				breakpoint: 4000,
				settings: {
			    	centerMode: false,
				    rows: 2,
					slidesPerRow: 2
			    }
			},
			{
				breakpoint: 740,
				settings: {
					arrows: false,
					dots: false,
					swipeToSlide: true,
			    	centerMode: true,
				    slidesToShow: 1,
				    rows: 1
			    }
			}

		]

	});

});