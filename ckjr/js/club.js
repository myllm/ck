$(function(){
	$cb_divRight=$("section .clubpreg .main>ul li>div.right");
	$cb_divRight.css({
		left:"-80%"
	});
	$cb_divRight.children("span").css({
		left:"100%",
		borderRightColor:"transparent",
		borderLeftColor:"#fff"
	});
    $cb_ul=$cb_divRight.parent().parent();
	$cb_ul.on("mouseenter","li",function(e){
			$(this).children("div").addClass("hover").parent().siblings().removeClass("hover");
		});
	$cb_ul.on("mouseleave","li",function(e){
			$(this).children("div").removeClass("hover").parent().siblings().addClass("hover");
		});
});
$(function(){
	$cbA=$("section .clubbanner .main>div a");
	$.ajax({
		type:"get",
		url:"data/users/islogin.php",
		success:function(res){
			if(res.ok){
                var html=`<a href="#">${res.phone.slice(0,3)}***${res.phone.slice(7)}</a>`;
				$cbA.replaceWith(html);
			}
		}
	});
});