/**
 * Created by web-01 on 2018/8/9.
 */
$(function(){
    $.ajax({
        type:"get",
        url:"data/img/img.php",
        data:{tab_id:5},
        dataType:"Json",
        success:function(res){
            var html="";
            for(var i in res){
                var {lg,img_msg,img_href}=res[i];
                html=`<img src="${lg}" alt=""/>`;
                $("section .main>div.container .oimg").eq(i).append(html);
                $("section .main>div.container .oimg").eq(i).find("span").text(img_msg);
            }
        }
    });
})
$(function(){
    $.ajax({
        type:"get",
        url:"data/msg/msg_organization.php",
        dataType:"Json",
        success:function(res){
            var html="";
            for(re of res){
                var {oname,omsg}=re;
                html+=`<tr>
                <th>${oname}</th>
                <td>${omsg}</td>
                </tr>`;
            }
            $("section .main>div.container table tbody").html(html);
        }
    });
})