(function($) {
	
	$('.mhs-menu-toggle').click(function(e){
		$("header.mhs-header").toggleClass('mobile-active');
	});
	
	/* Every time the window is scrolled ... */
	var $ani_elements = $('.ani');
	var lastScrollTop = 0;
	var aniActive = false;
	
	$(window).scroll(function(evt){
		scroll_actions();
	});
	
	function scroll_actions() {
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
		
		var sec1 = $(".mhs-intro").offset();
		var sec2 = $(".mhs-gallery").offset();
		var sec3 = $(".mhs-spaces").offset();
		var sec4 = $(".mhs-pricing").offset();
		var sec5 = $(".mhs-contact").offset();
		var sec6 = $(".mhs-faq").offset();
		
		var vpos = $(document).scrollTop();
	
		var sec1_trigger = sec1.top-100;
		var sec2_trigger = sec2.top-100;
		var sec3_trigger = sec3.top-100;
		var sec4_trigger = sec4.top-100;
		var sec5_trigger = sec4.top-100;
		var sec6_trigger = sec4.top-100;
	
		if(vpos < sec1.top){
			$('.mhs-primary-nav li.menu-item').addClass("active");
		}
		if((vpos >= sec1_trigger) && (vpos < sec2_trigger)) {
			$('.mhs-primary-nav li.menu-item').removeClass("active");
			$('.mhs-primary-nav li.menu-item-23').addClass("active");
			console.log("I'm in section 2");
		}
		else if ((vpos >= sec2_trigger) && (vpos < sec3_trigger)) {
			$('.mhs-primary-nav li.menu-item').removeClass("active");
			$('.mhs-primary-nav li.menu-item-25').addClass("active");
		}
		else if ((vpos >= sec3_trigger) && (vpos < sec4_trigger)) {
			$('.mhs-primary-nav li.menu-item').removeClass("active");
			$('.mhs-primary-nav li.menu-item-26').addClass("active");
		}
		else if ((vpos >= sec4_trigger) && (vpos < sec5_trigger)) {
			$('.mhs-primary-nav li.menu-item').removeClass("active");
			$('.mhs-primary-nav li.menu-item-24').addClass("active");
		}
		else if ((vpos >= sec5_trigger) && (vpos < sec6_trigger)) {
			$('.mhs-primary-nav li.menu-item').removeClass("active");
			$('.mhs-primary-nav li.menu-item-27').addClass("active");
		}
		
	}
	
	$(window).load(function(){
		scroll_actions();
	});
	
})( jQuery );
	