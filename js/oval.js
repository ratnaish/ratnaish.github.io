


$("#main").jpreLoader({
	loaderVPos:"50%",
	autoClose:true	
},
function(){
	$("#main").animate({"opacity":"1"}, {queue:true,duration:2000,easing:"easeInOutQuad"});
}
);





$("#header").sticky({
	topSpacing:0
	
});



$("#ticker").flexslider({
				animation:"slide",
				direction:"vertical",
				reverse:true,
				controlNav:false,
				directionNav:false,
				slideshow:true,
				slideshowSpeed:4000

});


$(".scroll-link").bind("click",function(e){
	e.preventDefault();
	$(".scroll-link").parent().removeClass('current');
	$(this).parent().addClass('current');
	
	var target = $(this).attr('href');
	$("html,body").animate(
	{
		scrollTop: $(target).offset().top
	},
	1200
	);
});

$("#ticker-bg").parallax("50%",0.5,true);
$(".about-parallax").parallax("50%",0.5,true);


$(".services-slider").flexslider({
				animation:"slide",
				direction:"horizontal",
				controlNav:false,
				directionNav:false,
				slideshow:false,
				startAt:0,
				start:function(slider){
					
					$(".services-row a").click(function(e){
						
						e.preventDefault();
						
						$(".services-row a").removeClass("active-service");
						$(this).addClass("active-service");
						var slideTo = $(this).attr('name');
						var slideToInt = parseInt(slideTo);
						
						if(slider.currentSlide != slideToInt){
							
							slider.flexAnimate(slideToInt);
						}
						
						
					});
					
					
				}

});


$("#portfolio_container").mixitup({
	targetSelector:'.box',
	effects:['fade'],
	easing:'smooth',
	transitionSpeed:1200
});


