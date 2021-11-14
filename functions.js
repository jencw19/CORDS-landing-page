//changes nav from transparent to color on scroll
$(window).scroll(function () {
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 60);
});


//collapse navbar sm screen on click
$("#navbarSupportedContent a:not(.dropdown-toggle)").click(function () {
	$("#navbarSupportedContent").collapse("hide");
});
