(function($) {
	
	$('.mhs-menu-toggle').click(function(e){
		$("header.mhs-header").toggleClass('mobile-active');
	});
	
	/* Every time the window is scrolled ... */
	var $ani_elements = $('.ani');
	var lastScrollTop = 0;
	var aniActive = false;
	
	$(window).scroll(function(evt){
		check_if_in_view();
	});
	
	function check_if_in_view() {
	  var window_height = $(window).height();
	  var window_width = $(window).width();
	  var window_top_position = $(window).scrollTop();
	  var window_bottom_position = (window_top_position + window_height);
	
	  $.each($ani_elements, function() {
	    var $element = $(this);
	    var element_height = $element.outerHeight();
	    var element_top_position = $element.offset().top;
	    var element_bottom_position = (element_top_position + element_height);
	
	    //check to see if this current container is within viewport
	    if ((element_bottom_position >= window_top_position) &&
	        (element_top_position <= window_bottom_position)) {
	      $element.addClass('in-view');
	    } else {
	      $element.removeClass('in-view');
	    }
	  });
	  
	}
	
	$(window).load(function(){
		check_if_in_view();
	});
	
})( jQuery );
	