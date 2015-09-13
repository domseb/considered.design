// Show suggested articles
(function ($, root, undefined) {
	$.fn.shuffleStudies = function(element) {
		return this.each(function() {
			var $this = $(this);
			var elems = $this.children(element);

			elems.sort(function() { return (Math.round(Math.random())-0.5); });

			$this.detach(element);

			for (var i=0; i < element.length; i++) {
				$this.append(elems[i]);
			}
		});
	}

	$(function() {
		if( $(".case-study").length > 0 ) {
			$(".cards-wrapper").shuffleStudies(".card");
			$('.cards-wrapper .card:gt(2)').remove();
		}
	});
})(jQuery, this);
