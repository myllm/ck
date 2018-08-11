/**
 * Created by web-01 on 2018/7/21.
 */
$(function(){
// 手机注册---第一步
    var $msgP=$("section .main>div>form>.message>p");
    //手机号码注册
    var $phone=$msgP.eq(0).children("input[name=phone]");
    var $phoneSpan=$phone.next("span");
    var isKong,isPhone,isYqr=1;
    var reg=/^((0086)|(\+86))?(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    function phoneyYz(){
        var val=$phone.val();
        if(!reg.test(val)){
            $phoneSpan.removeClass("hover");
            if (val!=""){
                $phoneSpan.text("请输入正确的手机号码！");
                isKong=1;
            }else if(isKong==1&&val==""){
                $phoneSpan.text("请输入手机号码！");console.log(val);
            }
        }else if(reg.test(val)){
            $.ajax({
                type:"post",
                url:"data/users/phoneSignin.php",
                data:{phone:val},
                success:function(res){
                    if(res){
                        $phoneSpan.text("该手机号码已注册！").removeClass("hover");
                    }else{
                        $phoneSpan.addClass("hover");
                        isPhone=1;
                    }
                }
            });
        }
    }
    $phone.blur(function(){
        phoneyYz();
    });
    //邀请人验证
    var $yqr=$msgP.eq(1).children("input[name=yqr]");
    var $yqrSpan=$yqr.next("span");
    $yqr.blur(function(){
        var val=$yqr.val();
        if(val!==""){
            $.ajax({
                type:"post",
                url:data/users/yqrSigin.php,
                data:{yqr:val},
                success:function(res){
                    if(!res){
                        $yqrSpan.text("该邀请人不存在！").removeClass("hover");
                        isYqr=0;
                    }else{
                        $yqrSpan.addClass("hover");
                        isYqr=1;
                    }
                }
            });
        }else{
           isYqr=1; 
        }
    });
    //下一步验证
    var $msgBtn=$msgP.eq(3).children("#msgbtn");
    var $msgcbx=$msgP.eq(2).find("#msgcbx");
    var $bg_model=$("body .bg-model");
    var $div_password=$("section .main>div>form>.password");
    var $li=$("section .main>div>ul>li");
    $msgBtn.click(function(){
        var val=$phone.val();
        if(val==""){
            $phoneSpan.text("请输入正确的手机号码！").removeClass("hover");
        }else if(isPhone==1&&isYqr==1){
            if($msgcbx.is(":checked")){
                $div_password.removeClass("hover").siblings().addClass("hover");
                $li.eq(2).addClass("org").children("div").addClass("org");
            }else{
                $bg_model.css("display","block");
            }
        }
    });
    // bg_model确认
    var $bgmLi=$bg_model.find("ul>li:last-child");
    $bgmLi.click(function(){
        $bg_model.css("display","none");
    });    
// 密码---第二步
    var $pwdP=$("section .main>div>form>.password>p");
    var isyzm,ispassword,ispwd;
    //验证码验证
    var $cvs=$pwdP.eq(0).children("#yzm");
    var $inputYzm=$cvs.prev();
    var $spanYzm=$cvs.next();
    var ctx=$cvs[0].getContext("2d");
    var yzm=[0,1,2,3,4,5,6,7,8,9,
    "a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v",
    "w","x","y","z","A","B","C","D","E","F","G",
    "H","I","J","K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z"];
    var yzmstr=[];
    function nr(min,max){
        return Math.floor(Math.random()*(max-min)+min);
    }
    function cr(min,max){
        return `rgb(${nr(min,max)},${nr(min,max)},${nr(min,max)})`;
    }
    $inputYzm.focus(function(){
        $spanYzm.text("请进行验证码验证！").removeClass("hover"); 
        $cvs.removeClass("hover");
        ctx.clearRect(0,0,90,40);
        ctx.save();
        $cvs.css("backgroundColor",cr(180,240));
        ctx.font="14px Microsoft YaHei";
        ctx.textBaseline="bottom";
        for(var i=0;i<4;i++){
            var str=yzm[nr(0,yzm.length-1)];
            yzmstr[i]=str;
            ctx.fillStyle=cr(0,80);
            ctx.fillText(str,nr(0,9)+i*20,nr(20,35));
        }
        for(var j=0;j<50;j++){
            ctx.restore();
            ctx.beginPath();
            ctx.globalAlpha=0.4;
            ctx.arc(nr(5,85),nr(5,38),2,0,Math.PI*2);
            ctx.fillStyle=cr(130,230);
            ctx.fill();
            ctx.closePath();
        }
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(0,nr(18,22));
        ctx.quadraticCurveTo(nr(40,50),nr(15,25),90,nr(18,22));
        ctx.stroke();
        ctx.closePath();
    });
    $inputYzm.blur(function(){
        var val=$inputYzm.val();
        var strYzm=yzmstr.join("");
        if(val.toUpperCase()==strYzm.toUpperCase()){
            $spanYzm.addClass("hover");
            $cvs.addClass("hover");
            isyzm=1;
        }else{
            $spanYzm.text("验证码错误！").removeClass("hover");
        }
    });
    //密码验证
    var $password=$pwdP.eq(1).children("[name=upwd]");
    var $spanPassword=$password.next();
    var ret=/^.*(?=[\w!@#$%^&*?\(\),]{8,16})(?=.*\d+)(?=.*[A-Z]*)(?=.*[a-z]+).*$/;
    $password.focus(function(){
        $spanPassword.text("请输入8~16位数字、字母或特殊符号！").removeClass("hover");
    });
    $password.blur(function(){
        var val=$password.val();
        if(val==""){
            $spanPassword.text("请输入8~16位数字、字母或特殊符号！").removeClass("hover");
        }else if(!ret.test(val)){
            $spanPassword.text("至少输入一位数字，字母").removeClass("hover");
        }else{
            $spanPassword.addClass("hover");
            ispassword=1;
        }
    });
    //重复密码验证
    var $pwdc=$pwdP.eq(2).children(".pwdc");
    var $spanPwdc=$pwdc.next();
    $pwdc.focus(function(){
        $spanPwdc.text("请确认密码！").removeClass("hover");
    });
    $pwdc.blur(function(){
       if($password.val()==$pwdc.val()){
        $spanPwdc.addClass("hover");
        ispwd=1;
       }else{
        $spanPwdc.text("请重新确认密码").removeClass("hover");
       }
    })
    // 下一步,注册成功
    var $pwdbtn=$pwdP.eq(3).children("#pwdbtn");
    var $success=$("section .main>div>form>.success");
    var $suc_model=$("body .suc-model");
    $pwdbtn.click(function(){
        if($inputYzm.val()==""){
           $spanYzm.text("请进行验证码验证！").removeClass("hover"); 
        }else if($password.val()==""){
            $spanPassword.text("请输入8~16位数字、字母或特殊符号！").removeClass("hover");
        }else if($pwdc.val()==""){
            $spanPwdc.text("请确认密码！").removeClass("hover");
        }
        if(isyzm==1&&ispassword==1&&ispwd==1){
            console.log(1);
            $.ajax({
                type:"post",
                url:"data/users/sigin.php",
                data:$("section .main>div>form").serialize(),
                success:function(res){
                    if(res){
                        $success.removeClass("hover").siblings().addClass("hover");
                        $li.eq(4).addClass("org").children("div").addClass("org");
                    }else{
                        $suc_model.css({
                            display:"block"
                        });
                    }
                }
            });
            }
    });
    //注册失败
    $suc_model.find("li:last-child").click(function(){
        $suc_model.css({
            display:"block"
        });
        location.reload(false);
    });
// 验证提交
    var $sucbtn=$success.find("#sucbtn");
    $sucbtn.click(function(){
        location.href="login.html";
    });

})

