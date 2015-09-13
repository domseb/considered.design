// Forms
(function ($, root, undefined) {

	// Remove local path from file uploads
	$('input[type=file]').change(function (e) {
		$in = $(this);
		$in.next().html($in.val());
		$(".filename").text($in.val().split('\\').pop());
	});

})(jQuery, this);
