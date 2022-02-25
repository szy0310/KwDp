function login(){
    var email=document.getElementById ("email").value;
    var password=document.getElementById ("password").value;
    $.ajax({
        type:"POST",
        dataType:"json",
        url:"http://39.99.191.148:3000/api/user/login",
        accepts:"application/json; charset=utf-8",
        async :false,
        data:JSON.stringify({
            "email":email,
            "password":password
        
        }),
    success:function(result){
            console	.log("data is :" + result)
            if(result.code==200){

                window.location.href="./content/financial.html"
                let a = document.createElement('a')
                alert("登录成功")
                
            }else{
                alert(result.msg)
            }
        }
    })

}