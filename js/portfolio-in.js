// JavaScript Document

$(function()
{	



	//大圖屬性
	var eViewport = $('.work'),
			eViewLi = $('.work li'),
			speed = 3000,
			nAll = eViewLi.length,	
		 	nNow = 0,


	//控制按鈕
	bnPrev = $(".bnPrev"),
	bnNext = $(".bnNext"),
	bnAuto = $('.bnAuto'),
//	bnInfo = $('.bnInfo'),
	
	//判別屬性
	bAuto = true;
//	bInfo = false,
	// bThumbOn = true;	

	//頁碼按鈕
//	ePage = $('.page'),
//	eSquare = $('.page-square'),
//	htmlPage = '',
//	nSquareX = 0;

	//縮圖屬性
//	eThumbMask = $('.thumb-mask'),
//	eThumbBns = $('.thumb-bns'),
//	thumbAllW = 70 * nAll,
//	nThumbNow = 0,

	//資訊
//	eInfo = $('.info');





/*====================================================
	  								頁碼與縮圖設定 
	====================================================*/

  // 頁碼html
//	for(var i = 1; i <= nAll; i++){
//		htmlPage += '<li>' + i +'</li>';
//	}
//	ePage.find('ul').html(htmlPage); // 載入頁碼
//	eThumbBns.width(thumbAllW) // 設定縮圖總長度
//	var ePageNum = $('.page-num li');
		
	//數字設定------------------------------------
//	var setPageNum = function(){		
//		ePageNum.eq(nNow).addClass("on").siblings().removeClass('on');//數字		
//		nSquareX = ePageNum.eq(nNow).position().left;//方塊
//		eSquare.css('left', nSquareX);//方塊
//	}
//	setPageNum();
	
	//點擊設定
//	ePageNum.on({
//		click: function(){
//			nNow = $(this).index();
//			setPageNum();
//			showPhoto();
//		},
//		mouseenter: function(){
//			nThumbNow = $(this).index();
//			setThumbs();
//		}
//	})

	//縮圖設定------------------------------------
//	var setThumbs = function(){
//		eThumbMask.css('left', nThumbNow * 20);
//		eThumbBns.css('left', nThumbNow * -70);
//	}
	//點擊設定
//	ePage.on({
//		mouseenter: function(){
//			eThumbMask.css('opacity', 1);
//		},
//		mouseleave: function(){
//			eThumbMask.css('opacity', 0);
//		}
//	})
	
	/*====================================================
	  控制按鈕效果設定: 上一張 / 下一張 / 自動播放 / 全螢幕 / 其他 
	====================================================*/
		
	function showPhoto(){
		//大圖設定
			eViewLi.eq(nNow).stop().fadeTo(1000,1).siblings().stop().fadeTo(1000,0);
//		eViewLi.eq(nNow).stop().fadeTo(1000,1).css({zIndex:1})
//		.siblings().stop().fadeTo(1000,0).css({zIndex:0});
		//頁碼設定	
//		setPageNum();
	}
	//上一張
	function showPrev(){
		nNow = (nNow > 0) ? nNow - 1 : nAll - 1
		showPhoto();
	}	
	//下一張
	function showNext(){
		nNow = (nNow < nAll - 1) ? nNow + 1 : 0
		showPhoto();
	}
//	bnPrev.on('click', function(){showPrev();})	
//	bnNext.on('click', function(){showNext();})

	//自動播放設定------------------------------------
//	var timer = 0;
//	function autoPlay(){
//		if(bAuto){
//			if(timer <= 0){
//				timer = setInterval(showNext, speed);
//				bnAuto.find('.icon').css('backgroundPosition','0 -10px')
//				.next().text('Pause');
//				$(".play").css({display:"none"});
//				$(".stop").css({display:"block"});
//			}	
//		}else{
//			clearInterval(timer);
//			timer = 0;
//			bnAuto.find('.icon').css('backgroundPosition','-10px -10px')
//			.next().text('Play');	
//			$(".play").css({display:"block"});
//			$(".stop").css({display:"none"});
//		} 
//	}
	//點擊設定
	bnAuto.on('click', function(){bAuto = !bAuto; })
	bnPrev.click(function(){bAuto = false;  showPrev(); })	
	bnNext.click(function(){bAuto = false;  showNext(); })

	//範圍內點擊切換圖片
	$(".work").on('click', function(e)
	{
		if($(window).width() > 1100)
		{  
		  var halfW = parseInt($(this).width() / 2);
		  var offset = $(this).offset();
		  var relativeX = (e.pageX - offset.left);

		  if(relativeX <= halfW){
		  	showPrev();
		  } else {
		  	showNext();
		  }
		};
	})	


	//資訊設定------------------------------------
//	var setInfo = function()
//	{
//		if(bInfo){
//			bnInfo.find('.icon').css('backgroundPosition','-10px -20px')
//			.parent().css('color', 'red');
//		}else{
//			bnInfo.find('.icon').css('backgroundPosition','0 -20px')
//			.parent().css('color', '');
//		}
//	}
	//點擊設定
//	bnInfo.on('click', function(){
//		bInfo = !bInfo; 
//		setInfo();
//		if(bInfo){
//			eInfo.stop().animate({'bottom': 0});
//		} else {
//			eInfo.stop().animate({'bottom': -eInfo.outerHeight()});
//		}
//	})
	
	/*====================================================
	  大圖縮放
	====================================================*/

	function open(){
//		$('.box-work').css({opacity:0}).animate({opacity:1},3000);
//		eViewLi.css({opacity:0, zIndex:0}).eq(nNow).css({opacity:1, zIndex:1});
//	  	eInfo.css('bottom', -eInfo.outerHeight());
		$(".play").css({display:"none"});

	  if($('.work').width() > 975){

	  	bAuto = true;
//	  	bInfo = false;
			eViewLi.css({opacity:0, zIndex:0}).eq(nNow).css({opacity:1, zIndex:1});
//	  	eInfo.css('bottom', -eInfo.outerHeight());
//			autoPlay();
			$('.controlBar').css({display:"block"});
			bnPrev.css({display:"block"});
			bnNext.css({display:"block"});
	  }else{
	  	bAuto = false;
//	  	bInfo = true;
	  	eViewLi.css({opacity:1, zIndex:1}).stop(true, true);
//	  	eInfo.css('bottom', 0);	
			$('.controlBar').css({display:"none"});
			bnPrev.css({display:"none"});
			bnNext.css({display:"none"});
	  }
//	  autoPlay();
//	  setInfo();

 
	}	

	//說明
		$(".detail").click(function(){
			var contT = $(".box-work").height();
			$("body,html").animate({scrollTop: contT},1000);
		});
	
	//進場效果		
//	var pageEnter = function(){
//		var eBar = $('.controlBar');
//		if(nWinW > 1100){
//			eBar.css('bottom', -40).stop().animate({'bottom': 0}, 800)
		// }else{

//		}
//	}

	//進場
	function init(){
		// $("#loading").css("display","none");//隱藏loading		
//		  pageEnter();
		  open();
//		  autoPlay();				
	}
	window.onload=init;	
	
	function onResize(){
		if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
			$(window).on("orientationchange",function(){			  
			  // pageEnter();
			  open();
			});	
		} else {			
			//window.onresize=zoomPhoto;			
			$(window).resize(function(){		  
			  // pageEnter();
			  open();
			});			
		}		
	}
	onResize();	
})

//move
function setScroll(){
	var win = $(window);
	var hWin = win.height();
	var scroll = $(window).scrollTop();

	var move = $(".move1, .move2");

	move.each(function(){
		var tCont = $(this).offset().top;

		if(scroll > tCont - hWin*0.85){
			$(this).addClass("show");
		}else{
			$(this).removeClass("show");
		}
	})
		
}

$(window).load(function(){
	setScroll();
})

$(window).scroll(function(){
	setScroll();
})