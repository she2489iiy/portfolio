$(function(){
	setScroll(); 

	$(window).scroll(function(){
		setScroll(); 
	})

	$("body").addClass('show-page');



	//nav
	$(".header").click(function() {
		$(".header").toggleClass("show");
		$(".header").toggleClass("header-on");
		$(".nav-bg").toggleClass("nav-bg-on");
		$(".header").toggleClass("show-nav");
	});
	
	//控制top出現
	function setScroll(){
		var win = $(window);
		var scrollTop = win.scrollTop();
		var winHeight = win.height();
		var bodyHeight = $(document).height();

		if(scrollTop > winHeight * 0.3 ){
			$(".scrolltop").css({opacity: 1});
		}else{
			$(".scrolltop").css({opacity: 0});
		}

		if(scrollTop > winHeight * 0.3 ){
			$(".scrolldown").css({opacity: 0});
		}else{
			$(".scrolldown").css({opacity: 1});
		}

		if(bodyHeight == (winHeight + scrollTop) ){
			$("footer").css({zIndex: 1});
		}else{
			$("footer").css({zIndex: -1});
		}

	}

	//down
	$(".scrolldown").click(function(){
		var contT = $(".top").height() - 80;
		$("body,html").animate({scrollTop: contT},1000);
	});
	

	//top
	$(".scrolltop").click(function() {
		$("body,html").animate({scrollTop: 0},500);
	});

})

//loading動畫設定
$(window).load(function(){	
	$("#loading").fadeOut(800,0);

})




