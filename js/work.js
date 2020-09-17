//move
function setScroll(){
	var win = $(window);
	var hWin = win.height();
	var wWin = win.width();
	var scroll = $(window).scrollTop();


	var move = $(".select-title, .select-bt, .move1 ,.move2 ,.move3 ,.move4 ,.move5, .bg");

	move.each(function(){
		var tCont = $(this).offset().top;

		if(scroll > tCont - hWin*0.9){
			$(this).addClass("show");
		}
	})


		
}

$(window).load(function(){
	setScroll();
})

$(window).scroll(function(){
	setScroll();
})