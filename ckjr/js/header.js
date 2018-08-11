$(function(){
	$.ajax({
		type:"get",
		url:"header.html",
		success:function(html){
			$("header").html(html);
            var $div_islogin=$("header .main .reg>div.islogin");
            var $a=$("header .main .reg>a");
            var $project=$("header .main .nav .project");
            $.ajax({
                type:"get",
                url:"data/users/islogin.php",
                success:function (res) {
                    if(res.ok){
                        $div_islogin.addClass("hover");
                        $a.addClass("hover");
                        $project.click(function(e){
                            e.preventDefault();
                            location.href="project.html";
                        });
                    }else{
                        $div_islogin.removeClass("hover");
                        $a.removeClass("hover");
                    }
                }
            });
		}
	});

})
