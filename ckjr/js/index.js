$(function(){
    $("header").addClass("hover");
    if($("html").prop("scrollTop")>70){
        $("header").css({
            backgroundColor:"#fff",
        }).removeClass("hover");
    }
    //header 楼层滚动
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        if(scrollTop>70){
            $("header").css({
                backgroundColor:"#fff",
            }).removeClass("hover");
        }else if(scrollTop<70){
            $("header").css("backgroundColor","rgba(0,0,0,0)").addClass("hover");
            }
        })
                //nav
	var $nav=$("nav");
	$nav.children().eq(0).css({
		backgroundImage:"url('img/weixin.png')",
	}).hover(
		function() {
			$(this).addClass("green").children().addClass("hover")
        },
		function() {
            $(this).removeClass("green").children().removeClass("hover")
        });
    $nav.children().eq(1).css({
        backgroundImage:"url('img/weibo.png')",
    }).hover(
        function() {
            $(this).addClass("red")
        },
        function() {
            $(this).removeClass("red")
        });
    $nav.children().eq(2).css({
        backgroundImage:"url('img/shang.png')",
    }).hover(
        function() {
            $(this).addClass("orange")
        },
        function() {
            $(this).removeClass("orange")
        });
    $nav.children().eq(2).click(function(){
        $('body,html').animate({
            "scrollTop": 0
        }, 500);
	});
                //信息安全
	var $safeP=$("section .safeInfo ul li p:last-child");
	$safeP.css({
		height: "36px",
		fontSize: "12px",
		color: "#999"
	});
	            //广告
	$("section .ggbox a:first-child").css("marginRight","20px");
	            //实时动态
	var $secLi=$("section .news .main div ul li:first-child");
    $secLi.css("height","175px");
    $("section .news .main div ul li:not(:first-child)").css("marginLeft","20px");
    var tab_id;
    function newsImgs(tab_id,$el1,$el2){
        $.ajax({
            type:"post",
            url:"data/img/img.php",
            data:{tab_id:tab_id},
            dataType:"JSON",
            success:function(res){
                var  html1="";
                var  html2="";
                for(var re of res){
                    var {md,img_msg,img_href}=re;
                    html1+=`<img src="${md}" alt="">`;
                    html2+=`<a href="${img_href}">${img_msg}</a>`;
                }
                $el1.html(html1);
                $el2.html(html2);
                var $secA=$el2.children("a");
                $el1.children().eq(0).addClass("fade");
                $el2.children("a").eq(0).addClass("hover");
                secRun($secA,$el1);
            }
    })
}
            //鼠标悬停事件
	function secRun(secA,secLi){
		secA.mouseenter(function(){
			var index=secA.index(this);
			$(this).addClass("hover").siblings().removeClass("hover");
			secLi.children().eq(index).addClass("fade").siblings().removeClass("fade");;
		});
	};
    //左边悬停
    var $secLiLeft1=$("section .news .main div:nth-child(2) ul li:first-child");
    var $secLiLeft2=$("section .news .main div:nth-child(2) ul li:last-child");
    tab_id=$secLiLeft1.parent().attr("data-tid");
    newsImgs(tab_id,$secLiLeft1,$secLiLeft2);
    //右边悬停
    $("section .news .main div:last-child").css("paddingLeft","10px");
    var $secLiRight1=$("section .news .main div:last-child ul li:first-child");
    var $secLiRight2=$("section .news .main div:last-child ul li:last-child");
    tab_id=$secLiRight1.parent().attr("data-tid");
    newsImgs(tab_id,$secLiRight1,$secLiRight2);
    //
})
