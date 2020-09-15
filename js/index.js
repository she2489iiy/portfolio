$(function(){

	//輪播圖
	function photos(){
		var photo = $(".bg-pic"),
				first = 0,
				all = photo.length;

		photo.css({opacity:0,zIndex:1}).eq(first).fadeTo(1000,1).addClass('move-img').css({zIndex:2});

		function next(){
			first = (first < all-1) ? first+1 :0;

			photo.css({zIndex:1}).eq(first).addClass('move-img').css({zIndex:2}).fadeTo(1000,1,function(){
				photo.eq(first).siblings().css({opacity: 0}).removeClass('move-img');
			}).siblings().css({zIndex:1});

			setTimeout(next,4000);
		}
		setTimeout(next,4000);
	}
	photos();


	//dot
	var num = $(".dot ul li").length;

	for( i=0; i<=num; i++){ 
		$(".dot ul li:eq("+i+")").click({id:i}, function(e){
			page = e.data.id+1;
			$("body,html").animate({ scrollTop: $(".p0" + page).offset().top},500);
		})
	}

})


//move
function setScroll(){
	var win = $(window);
	var hWin = win.height();
	var wWin = win.width();
	var scroll = $(window).scrollTop();


	var move = $(".move1 ,.move2 ,.move3 ,.move4");

	move.each(function(){
		var tCont = $(this).offset().top;

		if(scroll > tCont - hWin*0.9){
			$(this).addClass("show");
		}

		var hCont = $(this).outerHeight();
		var eName= $(this).find(".pic");
		var eImg = $(this).find(".pmove");
		var eImg2 = $(this).find(".pmove2");


		//set Name
		var startName = -300;
		var moveName = 300;
		var yName;


		if(scroll < tCont - hWin*0.9){
			yName = startName;
		}else if(scroll >= tCont - hWin*0.9 && scroll < tCont + hCont){
			yName = startName + moveName * (scroll - tCont + hWin*0.9) / (hCont + hWin*0.9);
		}else{
			yName = startName + moveName;
		}

		if(wWin>720){
			eName.css({transform: "translateY("+yName+"px)", WebkitTransform: "translateY("+yName+"px)"});
		}else{
			eName.css({transform: "", WebkitTransform: ""});
		}


		//set img
		var startImg = -80;
		var moveImg = 200;
		var yImg;

		if(scroll < tCont - hWin*0.9){
			yImg = startImg;
		}else if(scroll >= tCont - hWin*0.9 && scroll < tCont + hCont){
			yImg = startImg + moveImg * (scroll - tCont + hWin*0.9) / (hCont + hWin*0.9);
		}else{
			yImg = startImg + moveImg;
		}

		if(wWin>720){
			eImg.css({transform: "translateY("+yImg+"px)", WebkitTransform: "translateY("+yImg+"px)"});
		}else{
			eImg.css({transform: "", WebkitTransform: ""});
		}

		//set img
		var startImg2 = -80;
		var moveImg2 = 150;
		var yImg2;

		if(scroll < tCont - hWin*0.9){
			yImg2 = startImg2;
		}else if(scroll >= tCont - hWin*0.9 && scroll < tCont + hCont){
			yImg2 = startImg2 + moveImg2 * (scroll - tCont + hWin*0.9) / (hCont + hWin*0.9);
		}else{
			yImg2 = startImg2 + moveImg2;
		}

		if(wWin>720){
			eImg2.css({transform: "translateY("+yImg2+"px)", WebkitTransform: "translateY("+yImg2+"px)"});
		}else{
			eImg2.css({transform: "", WebkitTransform: ""});
		}


	})


		
}

$(window).load(function(){
	setScroll();
})

$(window).scroll(function(){
	setScroll();

	//dot
	if($(window).scrollTop() <= $("body,html").offset().top){
		$(".dot li").removeClass("show");//除了被點擊到的游標，其他都恢復成原來的顏色
	}else if($(window).scrollTop() > $("body,html").offset().top && $(window).scrollTop()<$(".p01").offset().top + 100){
    $(".dot li").removeClass("show");//除了被點擊到的游標，其他都恢復成原來的顏色
    $(".dot li:eq(0)").addClass("show");
  }else if($(window).scrollTop() >= $(".p01").offset().top + 100 && $(window).scrollTop()<$(".p02").offset().top + 150){
   $(".dot li").removeClass("show");//除了被點擊到的游標，其他都恢復成原來的顏色
    $(".dot li:eq(1)").addClass("show");
  }else if($(window).scrollTop() >= $(".p02").offset().top + 150 && $(window).scrollTop()<$(".p03").offset().top){
    $(".dot li").removeClass("show");//除了被點擊到的游標，其他都恢復成原來的顏色
    $(".dot li:eq(2)").addClass("show");
  }else if($(window).scrollTop() >= $(".p03").offset().top && $(window).scrollTop()<$(".p04").offset().top){
    $(".dot li").removeClass("show");//除了被點擊到的游標，其他都恢復成原來的顏色
    $(".dot li:eq(3)").addClass("show");
  }
	
})


