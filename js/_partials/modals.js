// Video Modals
(function ($, root, undefined) {
	$(function() {
		function videoModal(modalName){
			var modalToggle = $(modalName),
				videoWrapper = $(modalName + " + .video-modal-fade-screen .video-wrapper"),
				videoSRC = modalToggle.attr("data-Video") + "&autoplay=1";

			modalToggle.on("change", function() {
				if ($(this).is(":checked")) {
					$(videoWrapper).html('<iframe src="' + videoSRC + '" frameborder="0" allowfullscreen></iframe>');
					$("body").addClass("video-modal-open");
				} else {
					$("body").removeClass("video-modal-open");
				}
			});

			function closeModal(){
				$(videoWrapper).html('');
				$(modalName + ".video-modal-state:checked").prop("checked", false).change();
			}

			$(modalName + " + .video-modal-fade-screen," + modalName + " + .video-modal-fade-screen .video-modal-close").on("click", function() {
				closeModal();
			});

			$(document).keyup(function(e) {
				if (e.keyCode == 27 && $("body").hasClass("video-modal-open")) {
					closeModal();
				}
			});

			$(modalName + " + .video-modal-fade-screen .video-modal-inner").on("click", function(e) {
				e.stopPropagation();
			});
		}

		// Call functions for new video modals
		videoModal("#video-spr");
	});
})(jQuery, this);
