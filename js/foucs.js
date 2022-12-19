// JavaScript Document

/**
* 封面图片幻灯片轮播
**/
var t = count = n = 0;
$(function () {
	$(".big_img a:not(:first)").hide();
	$num_nav = $(".num_nav span");
	$big_img = $(".big_img a");
	count = $big_img.length;
	t = setInterval("showAuto()", 4000);

	$num_nav.click(function () {
		var num_nav = $(".num_nav span").index(this);
		$(this).addClass("selected").siblings().removeClass("selected");
		$big_img.filter(":visible").fadeOut(500).parent().children().eq(num_nav).fadeIn(1000);
	});

	$(".img_nav").hover(function () {
		clearInterval(t)
	}, function () {
		t = setInterval("showAuto()", 4000);
	});
})
/**
* 自动增加计数
**/
function showAuto() {
	n = n >= 3 ? 0 : (n + 1);
	$num_nav.eq(n).trigger('click');
}


var lastTimeUp = 0;
var lastTimeDown = 0;
var nowTimeUp = 0;
var nowTimeDown = 0;
/**
* 显示/隐藏导航栏
**/
var scrollFunc = function (e) {
	
	e = e || window.event;
	if (e.wheelDelta) { 							// 先判断浏览器IE，谷歌滑轮事件    
		if (e.wheelDelta > 0) { 					// 当滑轮向上滚动时 
			nowTimeDown = (new Date()).valueOf();
			if (nowTimeDown - lastTimeDown > 800) {
				jQuery("#nav_main").slideDown(1000);
			}
			jQuery("#sidebar").fadeIn("slow");
			lastTimeDown = nowTimeDown;
		}
		if (e.wheelDelta < 0) { 					// 当滑轮向下滚动时 
			nowTimeUp = (new Date()).valueOf();
			if (nowTimeUp - lastTimeUp > 800) {
				jQuery("#nav_main").slideUp(1000);
			}
			// alert($("#overall").scrollTop());
			alert(document.documentElement.scrollTop());
			lastTimeUp = nowTimeUp;
		}
	} else if (e.detail) { 							// Firefox滑轮事件 
		if (e.detail > 0) { 						// 当滑轮向上滚动时 
			nowTimeDown = (new Date()).valueOf();
			if (nowTimeDown - lastTimeDown > 800) {
				jQuery("#nav_main").slideDown(1000);
			}
			lastTimeDown = nowTimeDown;
		}
		if (e.detail < 0) { //当滑轮向下滚动时 
			nowTimeUp = (new Date()).valueOf();
			if (nowTimeUp - lastTimeUp > 800) {
				jQuery("#nav_main").slideUp(1000);
			}
			lastTimeUp = nowTimeUp;
		}
	}
}
//给页面绑定滑轮滚动事件 
if (document.addEventListener) {//firefox 
	document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//滚动滑轮触发scrollFunc方法 						// ie 谷歌 
window.onmousewheel = document.onmousewheel = scrollFunc;


/**
 * 元素淡入场
 */
$(document).ready(function fadeDiv(params) {
	$("#footer").fadeIn("slow");
});