$(function(){
	$.ajax({
		type:"get",
		url:"header.html",
		success:function(html){
			$("header").html(html);
            var $div_islogin=$("header .main .reg>div.islogin");
            var $a=$("header .main .reg>a");
            $.ajax({
                type:"get",
                url:"data/users/islogin.php",
                success:function (res) {
                    if(res.ok){
                        $div_islogin.addClass("hover");
                        $a.addClass("hover");
                    }else{
                        $div_islogin.removeClass("hover");
                        $a.removeClass("hover");
                    }
                }
            });
		}
	});
})
