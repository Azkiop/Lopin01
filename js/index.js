//連結button   #click="login()"
function login() {console.log();
//取得頁面輸入帳號密碼
var userEmail = document.getElementById("email_field").value;
var userPass = document.getElementById("password_field").value;

//登入帳號
firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
.then(function(){
  alert("登入成功")
  location.href="01.html"
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert("帳號或密碼錯誤");
});
}