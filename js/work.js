//move
function setScroll(){
	var win = $(window);
	var hWin = win.height();
	var wWin = win.width();
	var scroll = $(window).scrollTop();


	var move = $(".move1 ,.move2 ,.move3 ,.move4 ,.move5, .bg");

	move.each(function(){
		var tCont = $(this).offset().top;

		if(scroll > tCont - hWin*0.8){
			$(this).addClass("show");
		}else{
			$(this).removeClass("show");
		}

		var hCont = $(this).outerHeight();
		var eName= $(this).find(".pic");
		var eImg = $(this).find(".pmove");
//		var eImg2 = $(this).find(".pmove2");


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
		var startImg = -30;
		var moveImg = 50;
		var yImg;

		if(scroll < tCont - hWin*0.9){
			yImg = startImg;
		}else if(scroll >= tCont - hWin*0.9 && scroll < tCont + hCont){
			yImg = startImg + moveImg * (scroll - tCont + hWin*0.9) / (hCont + hWin*0.9);
		}else{
			yImg = startImg + moveImg;
		}

		if(wWin>720){
			eImg.css({top: yImg+"%"});
		}else{
			eImg.css({top: ""});
		}


	})


		
}

$(window).load(function(){
	setScroll();
})

$(window).scroll(function(){
	setScroll();
})