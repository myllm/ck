$(function(){
	var $safeborDiv=$("section .safebor .main>ul>li>div");
	var n=0;
	var time=setInterval(function(){
		if(n>=4){
			$safeborDiv.removeClass("hover");
			$safeborDiv.children().removeClass("hover");
			n=0;
		}
		$safeborDiv.eq(n).addClass("hover");
		$safeborDiv.eq(n).children().addClass("hover");
		n++;
	},1000);
})