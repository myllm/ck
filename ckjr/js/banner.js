//banner轮播
$(function(){
    var $Banner=$("#banner");
    var $Ul=$("#banner .slider ul");
    var $Left=$("#banner .dec .left");
    var $Right=$("#banner .dec .right");
    var $Cir=$("#banner .cir li");
    var tab_id=$Ul.attr("data-tid");
    var Index=0;
    var $Li,Width;
    // banner的宽度
    var widths=function(){
        var bodyWidth=$("body").width();
        Width=bodyWidth;
        $Li.css("width",Width);
        $Ul.css({
            width:Width*5,
            left:-Index*Width
        });
    };
    $(window).resize(function(){
        widths();
        $Li.eq(0).clone(true).replaceAll("#banner>.slider>ul li:last-child");
    });
    //图片
    $.ajax({
        type:"post",
        url:"data/img/img.php",
        data:{tab_id:tab_id},
        dataType:"JSON",
        success:function(res){
            var html="";
            for(var re of res){
                var {img_href}=re;
                html+=`<li><a href="${img_href}"></a></li>`;
            }
            html+=`<li></li>`;
            $Ul.html(html);
            $Ul=$("#banner .slider ul");
            $Li=$Ul.children();
            for(var i in res){
                var {lg}=res[i];
                $Li.eq(i).css({backgroundImage:"url('"+lg+"')"});
            }
            widths();
            $Li.eq(0).clone(true).replaceAll("#banner>.slider>ul li:last-child");
        }
    });
    // 小圆点
    $.each($Cir,function(index,value){
        $Cir.eq(index).on("click",function(){
            $(this).addClass("bcw").siblings().removeClass("bcw");
            $Ul.stop().animate({
                "left":-index * Width
            });
            Index=index;
        })
    });
    // 箭头
    $Right.on("click",function(){
        if(Index>=$Li.length-1){
            Index=0;
            $Ul.css("left",0);
        }
        Index++;
        $Ul.stop().animate({
            "left":-Index * Width
        });
        if(Index==$Li.length-1){
            $Cir.eq(0).addClass("bcw").siblings().removeClass("bcw");
        }else{
            $Cir.eq(Index).addClass("bcw").siblings().removeClass("bcw");
        }
    })
    $Left.on("click",function(){
        if(Index<=0){
            Index=$Li.length-1;
            $Ul.css("left",-Index * Width);
        }
        Index--;
        $Ul.stop().animate({
            "left":-Index * Width
        });
        if(Index==$Li.length-1){
            $Cir.eq(0).addClass("bcw").siblings().removeClass("bcw");
        }else{
            $Cir.eq(Index).addClass("bcw").siblings().removeClass("bcw");
        }
    });
    //banner轮播
    var time=setInterval(function(){
        $Right.click()
    },4000);
    // 停止
    $Banner.mouseenter(function(){
        clearInterval(time);
    });
    // 启动
    $Banner.mouseleave(function(){
        time=setInterval(function(){
            $Right.click();
        },4000);
    });
});
//friend轮播
$(function(){
    var $frdUl=$("section .friend .moveImg ul");
    var $frdLeft=$frdUl.parent().prevAll(".left");
    var $frdRight=$frdUl.parent().prevAll(".right");
    var Index=0;
    var imgLth=10;
    var Lth=6;
    var tab_id=$frdUl.attr("data-tid");
    $.ajax({
        type:"post",
        url:"data/img/img.php",
        data:{tab_id:tab_id},
        dataType:"JSON",
        success:function(res){
            var html="";
            for(var re of res){
                var {sm}=re;
                html+=`<li><img src="${sm}" alt=""></li>`;
            }
            $frdUl.html(html);
            var $frdLi=$frdUl.children();
            //添加重复的图片
            $frdUl=$("section .friend .moveImg ul");
            for(var i=0;i<Lth;i++){
                for(var j=0;j<imgLth;j++){
                    var $newLi=$("<li></li>");
                    $frdUl.append($newLi);
                    $frdLi.eq(j).clone().replaceAll($newLi);
                }
            }
            $frdLi=$frdUl.children();
            //设置窗口的宽度
            $frdUl.css({
                width:$frdLi.length*(180+24)-24+"px"
            });
        }
    });
    //右键
    $frdRight.on("click",function(){
        if(Index==imgLth){
            Index=0;
            $frdUl.css("left",0);
        }
        Index++;
        $frdUl.stop().animate({
            left:-Index*Lth*(180+24)+"px"
        },1000);
    });
    //左键
    $frdLeft.on("click",function(){
        if(Index==0){
            Index=imgLth;
            $frdUl.css("left",-Index*Lth*(180+24)+"px");
        }
        Index--;
        $frdUl.stop().animate({
            left:-Index*Lth*(180+24)+"px"
        },1000);
    });
    //轮播
    var time=setInterval(function(){
        $frdRight.click();
    },3000);
    //
    $frdUl.parent().hover(
        function(){
            clearInterval(time)
        },
        function(){
            time=setInterval(function(){
                $frdRight.click();
            },3000);
        }
    );
    $("section .friend span").hover(
        function(){
            clearInterval(time)
        },
        function(){
            time=setInterval(function(){
                $frdRight.click();
            },3000);
        }
    );
});
//数字滚动
$(function(){
    var n1="599,211",n2="12,161,085,160.47",n3="141,001,406.90";
    var $tcm=$("section .tcm li:not(.year,.more) p");
    function countMove($sq,count,csp,t){
        var number=parseInt($sq.text()); var c=0;
        var time = setInterval(function () {
            if(number>=9){
                number=0;
            }
            number++;
            $sq.html(number);
            if (c>count) {
                $sq.html(csp);
                clearInterval(time);
            }
            c++;
        }, t)
    }
    function addspan(n,index){
        var html="";
        for(var i=0;i<n.length;i++){
            html+=`<span>${n[i]}</span>`;
        }
        $tcm.eq(index).html(html);
        for(var j=0;j<n.length;j++){
            var $tcmspan=$tcm.eq(index).children().eq(j);
            if(n[j]==","||n[j]=="."){
                $tcmspan.html(n[j]);
            }else{
                if(j<3){
                    countMove($tcmspan,5*j+20,n[j],5*j+50);
                }else{
                    countMove($tcmspan,35,n[j],65);
                }
            }
        }
    }
    addspan(n1,0);
    addspan(n2,1);
    addspan(n3,2);
})

