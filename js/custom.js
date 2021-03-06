(function($) {
	
	var mm_open = false;
	
	$("header.mhs-header .menu-toggle").click(function(e){
		$(".mhs-primary-nav").toggleClass('mobile-active');
		$(this).toggleClass('active');
		if(mm_open){
			mm_open = false;
		} else {
			mm_open = true;
		}
	});
	
	$(".mhs-primary-nav li.menu-item a").click(function(e){
		if(mm_open){
			$(".mhs-primary-nav").toggleClass('mobile-active');
			$("header.mhs-header .menu-toggle").toggleClass('active');
			mm_open = false;
		}
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
		var sec3 = $(".mhs-story").offset();
		var sec4 = $(".mhs-spaces").offset();
		var sec5 = $(".mhs-pricing").offset();
		var sec6 = $(".mhs-faq").offset();
		var sec7 = $(".mhs-contact").offset();
		
		var vpos = $(document).scrollTop();
	
		var sec1_trigger = sec1.top-100;
		var sec2_trigger = sec2.top-100;
		var sec3_trigger = sec3.top-100;
		var sec4_trigger = sec4.top-100;
		var sec5_trigger = sec5.top-100;
		var sec6_trigger = sec6.top-100;
		var sec7_trigger = sec6.top-100;
	
		if(vpos < sec1.top){
			$('.mhs-primary-nav li.menu-item').addClass("active");
		}
		if((vpos >= sec1_trigger) && (vpos < sec2_trigger)) {
			$('.mhs-primary-nav li.menu-item').removeClass("active");
			$('.mhs-primary-nav li.menu-item-22').addClass("active");
			$(".mhs-primary-nav").removeClass("mhs-dark");
			$(".mhs-logo").removeClass("mhs-dark");
		}
		else if ((vpos >= sec2_trigger) && (vpos < sec3_trigger)) {
			$('.mhs-primary-nav li.menu-item').removeClass("active");
			$('.mhs-primary-nav li.menu-item-23').addClass("active");
			$(".mhs-primary-nav").addClass("mhs-dark");
			$(".mhs-logo").addClass("mhs-dark");
		}
		else if ((vpos >= sec3_trigger) && (vpos < sec4_trigger)) {
			$('.mhs-primary-nav li.menu-item').removeClass("active");
			$('.mhs-primary-nav li.menu-item-159').addClass("active");
			$(".mhs-primary-nav").removeClass("mhs-dark");
			$(".mhs-logo").addClass("mhs-dark");
		}
		else if ((vpos >= sec4_trigger) && (vpos < sec5_trigger)) {
			$('.mhs-primary-nav li.menu-item').removeClass("active");
			$('.mhs-primary-nav li.menu-item-25').addClass("active");
			$(".mhs-primary-nav").removeClass("mhs-dark");
			$(".mhs-logo").addClass("mhs-dark");
		}
		else if ((vpos >= sec5_trigger) && (vpos < sec6_trigger)) {
			$('.mhs-primary-nav li.menu-item').removeClass("active");
			$('.mhs-primary-nav li.menu-item-26').addClass("active");
			$(".mhs-primary-nav").removeClass("mhs-dark");
			$(".mhs-logo").addClass("mhs-dark");
		}
		else if ((vpos >= sec6_trigger) && (vpos < sec7_trigger)) {
			$('.mhs-primary-nav li.menu-item').removeClass("active");
			$('.mhs-primary-nav li.menu-item-27').addClass("active");
			$(".mhs-primary-nav").removeClass("mhs-dark");
			$(".mhs-logo").removeClass("mhs-dark");
		}
		else if (vpos >= sec7_trigger) {
			$('.mhs-primary-nav li.menu-item').removeClass("active");
			$('.mhs-primary-nav li.menu-item-24').addClass("active");
			$(".mhs-primary-nav").removeClass("mhs-dark");
			$(".mhs-logo").removeClass("mhs-dark");
		}
	}
	
	$(window).load(function(){
		scroll_actions();
	});
	
})( jQuery );
	