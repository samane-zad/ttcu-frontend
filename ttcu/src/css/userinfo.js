   
   /* function getuserinfo(){
        var detailArr={};*/
        detailArr["username"]=document.getElementById("username").value;
        detailArr["fName"]=document.getElementById("fName").value;
        detailArr["lName"]=document.getElementById("lName").value;
        detailArr["userType"]=document.getElementById("userType").value;
        detailArr["uni"]=document.getElementById("uni").value;
        detailArr["major"]=document.getElementById("major").value;
  

    /*   var detailArrstr=JSON.stringify(detailArr);
        var xmlhttp;
        if(window.XMLHttpRequest){
         xmlhttp=new XMLHttpRequest;
        }
        else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
    xmlhttp.onreadystatechange=respond;
    function respond (){
    
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
          
          var resonse = JSON.parse(this.responseText);
            if(resonse.code == 200){
              var token=resonse.object;
              window.localStorage.setItem("Token",token);
              window.location='../user/html/index/index.html';
            }else {
              window.location = 'welcome.html';
    
            }
    
        }
    
        else{
          console.log("Hello");
    
        }
      
    }
    
    
    xmlhttp.open('POST','http://127.0.0.1:8082/auth/login',true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    
    xmlhttp.send(detailArrstr);
    }*/