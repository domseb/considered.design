// Adaptivity page animation
(function ($, root, undefined) {
	$(function() {
		//set animation timing
		var animationDelay = 3000;
		initHeadline();

		function initHeadline() {
			//initialise headline animation
			animateHeadline($('.state-cards-item:first-child .state-cards-statelist'), 3000);
			animateHeadline($('.state-cards-item:last-child .state-cards-statelist'), 3140);
		}

		function animateHeadline($headlines, delay) {
			var duration = delay;
			$headlines.each(function(){
				var headline = $(this);

				//trigger animation
				setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
			});
		}

		function hideWord($word) {
			var nextWord = takeNext($word);

			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}

		function takeNext($word) {
			return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
		}

		function switchWord($oldWord, $newWord) {
			$oldWord.removeClass('is-visible').addClass('is-hidden');
			$newWord.removeClass('is-hidden').addClass('is-visible');
		}
	});
})(jQuery, this);
