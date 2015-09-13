// Reveal animations
(function ($, root, undefined) {
	$(function() {

		function randomReveal(element) {
			// Array shuffler by Jonas Raoni Soares Silva
			//@ http://jsfromhell.com/array/shuffle [v1.0]
			var shuffle = function(o){ //v1.0
				for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
				return o;
			};

			// Create an array from the number of elements
			var items = [];
			for (i = 0; i < element.length; i++ ) {
				items.push(i);
			}

			// Shuffle the array
			items = shuffle(items);
			var index = 0;

			// Fade in a random element in the grid
			var fadeInCards = setInterval(function() {
				if (index <= items.length) {
					$('.card:eq('+(items[index++])+')').toggleClass('card-hidden');
				} else {
					clearInterval(fadeInCards);
				}
			}, 50);
		}

		// Call the function on revealable elements
		if( $(".case-studies").length > 0 ) {
			randomReveal($(".case-studies .cards .card"));
		}
	});
})(jQuery, this);
