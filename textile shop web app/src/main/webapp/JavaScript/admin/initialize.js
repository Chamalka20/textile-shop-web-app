

//validation user loging or not-------------------------------------
var authNum = localStorage.getItem("auth");
const auth = new Auth();
console.log("hit");
auth.validateAuth(authNum);