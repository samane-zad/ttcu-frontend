function login(){
    var detailArr={};
    detailArr["username"]="username";
    detailArr["password"]="password";
   var detailArrstr=JSON.stringify(detailArr);
   console.log('detailArrstr');
    var xmlhttp;
    if(window.XMLHttpRequest){
     xmlhttp=new XMLHttpRequest;
    }
    else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
xmlhttp.onreadystatechsnge=respond;
function respond (){
    if(xmlhttp.status==200){
        // var users = JSON.parse(this.responseText);
        var token=xmlhttp.getResponseHeader['Authorization'];
        console.log(token);
        localStorage.setItem("Token",token);
    }
    else{

    }

}
xmlhttp.open('GET','http://192.168.1.4:8082/auth/login',true);
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send(detailArrstr);
}