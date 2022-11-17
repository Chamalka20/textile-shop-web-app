  class Auth {
     // setup the class and hide the body by default------------------
    constructor() {
        document.querySelector("body").style.display = "none";
        var auth = localStorage.getItem("auth");
        this.validateAuth(auth);
        console.log(auth);
    }
    // check to see if the localStorage item passed to the function is valid and ------------
    validateAuth(auth) {
		console.log(auth);
        if (auth != 1) {
			
         	console.log("hyhyhyhy");
          	window.location.replace("AdminLogin.jsp");
           
        } else {
             document.querySelector("body").style.display = "block";
			 
			
			
        }
    }
    // will remove the localStorage item and redirect to login  screen-------------
    logOut() {
		
        localStorage.removeItem("auth");
       	localStorage.removeItem("adminName");
        window.location.replace("AdminLogin.jsp");
    }
}