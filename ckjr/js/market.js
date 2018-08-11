/**
 * Created by web-01 on 2018/7/24.
 */
$(function(){
    var $arc=$("section .main .arc");
    var $labelUl=$arc.next().children("ul");
    //点击商品
    $labelUl.on("click","li",function(){
        $.ajax({
            type:"post",
            url:"data/users/islogin.php",
            success:function(res){
                console.log(res);
                if(res.ok){
                    var lid=$(this).attr("data-lid");
                    location.href=`market_label.html?lid=${lid}`;
                }else{
                    $bodymodel.addClass("hover");
                }
            }
        });
    //模态框
    var $bodymodel=$("body .bg-model");
        $bodymodel.on("click","span,a",function(){
            $bodymodel.removeClass("hover");
        })
    });
    //动态生成
    function search(sort,sc){
        $.ajax({
            type:"post",
            url:"data/label/market.php",
            data:{sort:sort,sc:sc},
            success:function(res){
                var html="";
                for(var re of res){
                    var {lid,days,limg,war,exc} = re;
                        html+=`<li data-lid="${lid}">
						<p>${days}天以上</p>
						<img src="${limg}">
						<p>${war}战力值</p>
						<p>${exc}</p>
					</li>`;
                }
                $labelUl.html(html);
            }
        });
    }
    search("lid","asc");
    //排序
    $arc.on("click","p",function(){
        $(this).addClass("hover").siblings().removeClass("hover");
        var sort=$(this).attr("data-sort");
        var sc=$(this).attr("data-sc");
        if(sort!="lid"){
            if(sc=="desc"){
                $(this).children("span").addClass("fade").removeClass("hover");
                $(this).attr("data-sc","asc");
            }else if(sc=="asc"){
                $(this).children("span").addClass("hover").removeClass("fade");
                $(this).attr("data-sc","desc");
            }
            search(sort,sc);
        }else{
            search(sort,sc);
        }
    })
})