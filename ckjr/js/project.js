/**
 * Created by web-01 on 2018/7/27.
 */
$(function(){
    //canvas绘画销量百分比
    function moveArc(mArc){
        var {ctx,x,y,width,height,rx,ry,r,start,end,num,font,str,fx,fy}=mArc;
        var i=-90+num/100*360;      //结束的弧度
        var time=setInterval(function(){
            ctx.clearRect(x,y,width,height);
            ctx.beginPath();
            ctx.arc(rx,ry,r,start*Math.PI/180,end*Math.PI/180);
            ctx.font=font;
            ctx.fillText(str,fx,fy);
            ctx.stroke();
            if(end>=i){
                clearInterval(time);
            }
            end+=1;
        })
    }
    //项目，债券显示隐藏
    $("section .project .title p:first-child").click(function(){
        $("section .project .pro").show().next().hide();
    });
    $("section .project .title p:last-child").click(function(){
        $("section .project .cre").show().prev().hide();
    });
    $("section .project .title p:first-child").click();
    //动态生成项目专区并排序筛选
    function search(fid,pday){
        $.ajax({
            type:"post",
            url:"data/project/project.php",
            data:{fid:fid,pday:pday},
            dataType:"Json",
            success:function(res){
                var html="";
                for(var re of res){
                    var {pid, pname, active, amethod, rmethod, itla, rat, rcpt,pday,pcnt,ncnt}=re;
                    html+=`<li>
                                <ul class="rows">
                                    <li>
                                        <a href="" data-pid="${pid}">${pname}</a>
                                        <a href="#" class="active"><span>${active}</span>${amethod}</a>
                                    </li>
                                    <li>
                                        <div>
                                            <p><span>还款方式</span>${rmethod}</p>
                                            <p><span>起投金额</span>${itla}元</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span>预计年化利率</span>
                                            <h3>${rat}<label>%</label><small>${rcpt}</small></h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span>借款期限</span>
                                            <h3>${pday}<label>天</label></h3>
                                        </div>
                                    </li>
                                    <li class="draw">
                                        <div>
                                            <canvas width="50" height="50" data-text="${Number(ncnt/pcnt)*100}"></canvas>
                                            <canvas width="50" height="50" data-text="${Number(ncnt/pcnt)*100}"></canvas>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <button>立即购买</button>
                                        </div>
                                    </li>
                                </ul>
						    </li>`;
                }
                $("section .pro .goods").html(html);
                $("section .pro .goods .active").each(function(){
                    if($(this).text()==""){
                        $(this).css("display","none");
                    }
                });
                $("section .pro .goods .draw").each(function(){
                    var canvas1=$(this).find("canvas")[0];
                    var ctx1=canvas1.getContext("2d");
                    var num;
                    num=100;
                    ctx1.strokeStyle="#FFE8CB";
                    ctx1.lineWidth=3;
                    moveArc({
                        ctx:ctx1, x:0, y:0, width:50, height:50, rx:25, ry:25, r:22,
                        start:-90, end:-90, num:num, font:"16px SimHei", str:"", fx:15, fy:32,
                    });
                    var canvas2=$(this).find("canvas")[1];
                    var ctx2=canvas2.getContext("2d");
                    ctx2.strokeStyle="#ff8c00";
                    ctx2.lineWidth=3;
                    ctx2.fillStyle="#666";
                    num=Math.floor($(canvas2).attr("data-text"));
                    moveArc({
                        ctx:ctx2, x:0, y:0, width:50, height:50, rx:25, ry:25, r:22,
                        start:-90, end:-90, num:num, font:"16px SimHei", str:num+"%", fx:15, fy:32,
                    });
                });
            }
    });
    }
    search("all","all");
    //点击条件排序筛选
    $("section .pro .fid").on("click","li",function(){
        $(this).addClass("active").siblings().removeClass("active");
         var fid=$(this).attr("data-fid");
         var pday=$(this).parent().attr("data-pday");
        $("section .pro .pday").attr("data-fid",fid);
        search(fid,pday);
    });
    $("section .pro .pday").on("click","li",function(){
        $(this).addClass("active").siblings().removeClass("active");
        var pday=$(this).attr("data-pday");
        var fid=$(this).parent().attr("data-fid");
        $("section .pro .fid").attr("data-pday",pday);
        search(fid,pday);
    });
    //点击单个项目跳转详情内容
    $("section .pro .goods").on("click","",function(){
    });
    //债券转让
    var $creLimit=$("section .cre .limit");
    function mession(limit,cday) {
        $.ajax({
            type:"post",
            url:"data/project/creditor.php",
            data:{limit:limit,cday:cday},
            dataType:"Json",
            success:function(res){
                var maxSize=parseInt(res.count);
                var lmt=parseInt(res.limit);
                //动态生成债券信息
                var html="";
                for(var re of res.rows){
                    var {cid, cname,crat, cday, cmoney, rcnt, ncnt, count}=re;
                    html+=`<li>
                                <ul class="rows">
                                    <li>
                                        <a href="#" data-pid="${cid}">${cname}</a>
                                    </li>
                                    <li>
                                        <div>
                                            <p><span>转让金额</span></p>
                                            <p><span>${cmoney}元</span></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span>转让预期年化</span>
                                            <h3>${crat}<label>%</label></h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span>剩余期限</span>
                                            <h3>${cday}<label>天</label></h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <button>立即购买</button>
                                        </div>
                                    </li>
                                </ul>
						    </li>`;
                }
                $("section .cre .goods").html(html);
            //动态生成按钮
                html="";
                if(maxSize<=5){
                    for(var i=1;i<=maxSize;i++){
                        html+=`<li>${i}</li>`;
                    }
                }else if(maxSize>5){
                    if(lmt<4){
                        html=`<li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>...</li>
                        <li>${maxSize}</li>`;
                    }else if(lmt>=maxSize-2){
                        html=`<li>1</li>
                        <li>...</li>
                        <li>${maxSize-3}</li>
                        <li>${maxSize-2}</li>
                        <li>${maxSize-1}</li>
                        <li>${maxSize}</li>`;
                    }else{
                         html=`<li>1</li>
                        <li>...</li>
                        <li>${lmt-1}</li>
                        <li>${lmt}</li>
                        <li>${lmt+1}</li>
                        <li>...</li>
                        <li>${maxSize}</li>`;
                    }
                }
                $creLimit.html(html);
                $("section .cre .limit>li:contains('"+lmt+"')").addClass("active").siblings().removeClass("active");
                $("section .cre .limit>li:contains('...')").css({
                    border:"none",
                    margin:"20px -5px"
                });
            }
        })
    }
    mession(1,"all");
    //点击条件筛选债券
    $("section .cre .cday").on("click","li",function(){
        $(this).addClass("active").siblings().removeClass("active");
        var cday=$(this).attr("data-cday");
        var limit=$(this).parent().attr("data-limit");
        $creLimit.attr("data-cday",cday);
        mession(limit,cday);
    });
    //点击分页按钮分页
    $creLimit.on("click","li",function(){
        var cday=$("section .cre .limit").attr("data-cday");
        var limit=$(this).text();
        mession(limit,cday);
    });
    //点击单个债券跳转详情内容
    $("section .cre .goods").on("click",".row>li>a",function(){
    });
})