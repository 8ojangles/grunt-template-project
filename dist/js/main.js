$(document).ready(function(){

	/* SLICK carousel init options */

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
			    	centerPadding: '20px',
				    slidesToShow: 1,
				    rows: 1
			    }
			}

		]

	}); /* CLOSE: SLICK carousel init options */


/* TOOLS offscreen page functions */

$('.js-tool-trigger').click(function(){

	$('.tools-section-offscreen-container').addClass('active');

});

$('.js-close-tools').click(function(){

	$('.tools-section-offscreen-container').removeClass('active');

});


/* TOOLS range slider */

$('.invest-amount').on('change.fndtn.slider', function(){
 	var thisVal = $('.invest-amount').attr('data-slider');
 	$('.invest-amount-display .js-range-amount').html(thisVal);
});

$('.invest-period').on('change.fndtn.slider', function(){
 	var thisVal = $('.invest-period').attr('data-slider');
 	$('.invest-period-display .js-range-amount').html(thisVal);
});



}); /* CLOSE: doc ready*/