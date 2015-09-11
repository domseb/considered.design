// Scroll animations
(function ($, root, undefined) {
	'use strict';

	//Basic reveal elements on scroll
	function scrollReveal(element, wScroll) {
		for(var i = 0; i < element.length; i ++) {
			var elementTopToPageTop = $(element[i]).offset().top,
				windowTopToPageTop = wScroll,
				distanceFromBottomToAppear = elementTopToPageTop - ($(window).height() / 1.25);

			if(windowTopToPageTop > distanceFromBottomToAppear) {
				$(element[i]).addClass('js-fade-element-show');
				$(element[i]).removeClass('js-fade-element-hide');
			}
		}
	}

	// Hide elements after scrolling past
	function scrollHide(element, wScroll) {
		var elementTopToPageTop = $(element).offset().top,
			distanceFromTopToFade = elementTopToPageTop - 300;

		if (wScroll > distanceFromTopToFade) {
			$(element).css({
				'opacity' : 0
			});
		} else if (wScroll < distanceFromTopToFade) {
			$(element).css({
				'opacity' : 1
			});
		}
	}

	// Parallax scroll effect
	function scrollParallax(element, wScroll) {

		if ($(element).length > 0 && $(window).width() >= 480) {
			$(element).css({
				'transform' : 'translateY(' + wScroll / 5 +'%)',
				'opacity' : 1 - wScroll / 400
			});
		}
	}

	// Function from David Walsh: http://davidwalsh.name/css-animation-callback
	function whichAnimationEvent(){
	  var t,
		  el = document.createElement("fakeelement");

	  var animations = {
		"animation" : "animationend",
		"OAnimation" : "oAnimationEnd",
		"MozAnimation" : "animationend",
		"WebkitAnimation" : "webkitAnimationEnd"
	  }

	  for (t in animations){
		if (el.style[t] !== undefined){
		  return animations[t];
		}
	  }
	}

	// Apply keyframe css animation to nav on scroll
	function scrollNav(wScroll) {
		var animationEvent = whichAnimationEvent(),
			signUp = $('.signup'),
			navBar = $('.navbar');

		function toggleTransition() {
			if (signUp.hasClass('no-transition')) {
				setTimeout(function(){
					signUp.removeClass('no-transition');
				}, 800);
			} else {
				signUp.addClass('no-transition');
			}
		}

		// Toggle in/out animation classes
		function toggleAnimation() {
			navBar.toggleClass('fixed-nav-in');
			navBar.toggleClass('fixed-nav-out');
		}

		// Insta-kill animations close to the top
		if (wScroll < 60 && navBar.hasClass('fixed-nav-out')) {
			navBar.removeClass('fixed-nav-out');
		}

		if (wScroll > 500) {
			if (navBar.hasClass('fixed-nav-out')) {
				toggleAnimation();
				toggleTransition();
			} else if (!navBar.hasClass('fixed-nav-in')) {
				navBar.addClass('fixed-nav-in');
				toggleTransition();
			}

			// Detect when the keyframe animation ends
			navBar.one(animationEvent, function(event) {
				toggleTransition()
			});
		} else if (navBar.hasClass('fixed-nav-in')) {

			toggleAnimation();
			signUp.addClass('no-transition');

			// Detect when the keyframe animation ends
			navBar.one(animationEvent, function(event) {
				navBar.removeClass('fixed-nav-out');
			});

			toggleTransition();
		}
	}

	// Handle scroll functions, debouncing them from the event with requestAnimationFrame
	var latestKnownScrollTop = 0,
		ticking = false;

	function onScroll() {
		latestKnownScrollTop = $(window).scrollTop();
		requestTick();
	}

	function update() {
		var wScroll = latestKnownScrollTop;
		ticking = false;

		scrollNav(wScroll);

		// Page specific scroll functions
		if ($('body').hasClass('home')) {
			scrollReveal($('.main-feature'), wScroll);
			scrollReveal($('.personalise-img'), wScroll);
			scrollHide($('.scroll-prompt'), wScroll);
		} else if ($('body').hasClass('post')) {
			scrollParallax($(".post-header-content"), wScroll);
		} else if ($('body').hasClass('case-study')) {
			scrollParallax($(".study-header-details"), wScroll);
		}
	}

	function requestTick() {
		if(!ticking) {
			requestAnimationFrame(update);
		}
		ticking = true;
	}

	window.addEventListener('scroll', onScroll);

})(jQuery, this);
