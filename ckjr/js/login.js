/**
 * Created by web-01 on 2018/7/21.
 */
$(function(){
    var $ul=$("section .main>.login>ul");
    var $phone=$ul.find("#phone");
    var $upwd=$ul.find("#upwd");
    var $err=$ul.children(".err");
    var $btn=$ul.children("#loginbtn");

    $phone.blur(function(){
        $err.text("").removeClass("hover");
    });
    $upwd.blur(function(){
        $err.text("").removeClass("hover");
    });
    $btn.click(function(){
        var phone=$phone.val();
        var upwd=$upwd.val();
        var reg,re;

        reg=/^\+?[\d]{11,14}$/;
        re=/^.*(?=[\w!@#$%^&*?\\/,]{8,16})(?=.*\d+)(?=.*[A-Z]*)(?=.*[a-z]+).*$/;
        if(!reg.test(phone)){console.log(1);
            $err.text("请填写正确的手机号码！").addClass("hover");
        }else if(!re.test(upwd)){
            $err.text("密码格式不正确！").addClass("hover");
        }else{
            $.ajax({
                type:"post",
                url:"data/users/login.php",
                data:{phone:phone,upwd:upwd},
                dataType:"json",
                success:function(res){
                    console.log(res.ok);
                    if(!res.ok){
                        $err.text("用户名或密码不正确！").addClass("hover");
                    }else{
                        location.href=`project.html?phone=${res.phone}`;
                    }
                }
            });
        }


    });
})