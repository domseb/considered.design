// Hero Animations
(function ($, root, undefined) {
	// Trigger homepage hero animation
	$(function() {
		$("#hero-section .hero-wrapper").addClass("anim-start");
	});

	// Scroll to first feature section
	$(".scroll-prompt").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(".scroll-prompt").offset().top
		}, 800);
	});

})(jQuery, this);
