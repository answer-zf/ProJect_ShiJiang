/*
 * @Author: answer-zf
 * @Date:   2019-08-28 10:09:03
 * @Last Modified by:   answer-zf
 * @Last Modified time: 2019-10-16 14:20:52
 * @E-mail: 657829956@qq.com
 */

#region

$(function() {

	$(window).scroll(function() {
		// part1
		if ($(window).scrollTop() >= 400 && $(window).scrollTop() < 1700) {
			$(".section_1_gallery_grid img").css({
				transform: "scale(1,1)",
			});
		} else {
			$(".section_1_gallery_grid img").css({
				transform: "scale(0,0)",
			});
		}
		// part1 #end
		// origin 
		if ($(window).scrollTop() >= 1300 && $(window).scrollTop() < 2000) {
			$(".index_part2 img").css({
				transform: "scaleX(1)",
    			opacity: 1
			})
		} else {
			$(".index_part2 img").css({
				transform: "scaleX(-1)",
				opacity: 0
			})
		}
		// origin end

		// food  
		if ($(window).scrollTop() >= 1800 && $(window).scrollTop() < 2600) {
			$(".index_part3 .col-md-3").css({
				transform: "translateX(0px)",
				opacity: "1"
			});
			$(".index_part3 .col-md-3").css({
				transform: "translateX(0px)",
				opacity: "1"
			});
			$(".index_part3 .col-md-6").css({
				transform: "translateX(0px)",
				opacity: "1"
			})
		} else {
			$(".index_part3 .col-md-3").css({
				transform: "translateX(-200px)",
				opacity: "0"
			});
			$(".index_part3 .col-md-3").css({
				transform: "translateX(-200px)",
				opacity: "0"
			});
			$(".index_part3 .col-md-6").css({
				transform: "translateX(200px)",
				opacity: "0"
			})
		}

		// food  end
	});
})