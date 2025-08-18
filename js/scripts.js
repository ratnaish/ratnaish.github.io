
$("#main").animate(
				{'opacity':'1'},
				{queue:true,duration:700,easing:'linear'}
			   );


$("a.scroll-link").click(function(e){
	
	e.preventDefault();
	
	$("a.scroll-link").parent().removeClass("current");
	$(this).parent().addClass("current");
	
	var target = $(this).attr('href');
	    target = $(target);
	
	
	$("html,body").animate(
	{
		scrollTop: target.offset().top
	},
	{queue:true,duration:1000,easing:'easeInOutQuad'}
	);
	
});


$(".nav-button").click(function(e){
	
	$(this).toggleClass("open");
	
	if($(".nav-button").hasClass("open")){
	$(".nav-button i").removeClass("fa-bars").addClass("fa-times");
	}
	else{
		$(".nav-button i").removeClass("fa-times").addClass("fa-bars");
	}
	
	$("#mobile-menu,#mobile-menu .link-holder").slideToggle();
	
});



$("#text-ticker").flexslider({
	animation:"slide",
	slideshow:true,
	slideshowSpeed:4000,
	controlNav:false,
	directionNav:false,
	direction:"vertical"
});


$("#header").sticky({
	topSpacing:40
});



$(".testimonials-slider").flexslider(
{
	animation:"slide",
	animationSpeed:1000,
	easing:"easeInOutQuad",
	slideshow:true,
	controlNav:false,
	directionNav:false,
	startAt:0
	
}
);



$("#portfolio_container").mixitup({
	targetSelector:'.box',
	effects:['fade'],
	easing:'smooth',
	transitionSpeed:1200
});
