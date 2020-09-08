$(function(){

	

	//輪播圖
	function photos(){
		var photo = $(".pic"),
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


})


