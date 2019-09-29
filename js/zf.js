/*
 * @Author: answer-zf
 * @Date:   2019-08-28 10:09:03
 * @Last Modified by:   answer-zf
 * @Last Modified time: 2019-08-29 12:00:37
 * @E-mail: 657829956@qq.com
 */

// 
$(function() {

	$(window).scroll(function() {
		// about
		if ($(window).scrollTop() >= 300 && $(window).scrollTop() < 1100) {
			$(".i-ab-img img").css({
				transform: "translateX(0px)",
				opacity: "1"
			});
			$(".i-ab-ati").css({
				transform: "translateX(0px)",
				opacity: "1"
			})
		} else {
			$(".i-ab-img img").css({
				transform: "translateX(-200px)",
				opacity: "0"
			});
			$(".i-ab-ati").css({
				transform: "translateX(200px)",
				opacity: "0"
			})
		}
		// about #end
		// origin 
		if ($(window).scrollTop() >= 900 && $(window).scrollTop() < 1650) {
			$(".i-origin .img img").css({
				transform: "scale(1,1)  rotateZ(360deg)",
			})
		} else {
			$(".i-origin .img img").css({
				transform: "scale(0,0)  rotateZ(0deg)",
			})
		}
		// origin end

		// food  
		if ($(window).scrollTop() >= 1600 && $(window).scrollTop() < 2400) {
			$(".specy ul li .mak_img").css({
				opacity: "1",
				top: "0",
			})

		} else {
			$(".specy ul li .mak_img").css({
				opacity: "0",
				top: "-50px",
			})
		}

		// food  end
	});
})