<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
<style>

.login-outer-container{
	display:grid;
	place-items:center;
	margin-top:90px;
	height:100px;

}
.login{

	display:flex;
	flex-direction: column;
	gap:10px;
	align-items:center;
	justify-content:center;
	border-radius:7px;
	height:400px;
	width:400px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

}

</style>
<body>
	

<!--    Main Login Form-->
  <div class="login-outer-container">  
	
     <div id="loginHolder" class="login">
     	<div class="SignLog"><h2>Admin Login</h2></div>
         <input type="text" placeholder="Enter user Name" name="userid" id="namein">
         <input type="password" placeholder="Enter a password" name="pswrd" id="passwordin">
          <div id="loginFailure" style="color:red;"><p></p></div>
        <button type="button" class="btn btn-success" onclick="login()">Login</button>
         

     </div>
   </div>

<script type="text/javascript">
 var isSaleSuccess = false;
 
 //after click clear the error messages-----------------------------------
 document.getElementById("namein").addEventListener('click',function(){
	 
	 document.getElementById("loginFailure").innerHTML = "" ;
	 
 })
 
 document.getElementById("passwordin").addEventListener('click',function(){
	 
	 document.getElementById("loginFailure").innerHTML = "" ;
	 
 })
//-----------------------------------------------------------------------
function login(){
	var userName=document.getElementById("namein").value;
	var password=document.getElementById("passwordin").value;
	
	validated();
	
	if(isSaleSuccess){
	
		$.post("../admin",{username:userName,password:password},function(isSuccess){
			
			if(isSuccess=="true"){
				
				localStorage.setItem("auth", 1);
			    window.location='adminhome.jsp';
				
			}else{
				
				 document.getElementById("loginFailure").innerHTML = "user name or password not match" ;
			}
		
		})

	}
	
	
}

function validated(){
	var userName=document.getElementById("namein").value;
	var password=document.getElementById("passwordin").value;
	
	if(userName === "" ||  password === ""){
		
		document.getElementById("loginFailure").innerHTML = "Please fill out fields" ;
		isSaleSuccess = false;
		
	}else{
		
		isSaleSuccess = true;
		
	}

	
}


</script>
</body>
</html>