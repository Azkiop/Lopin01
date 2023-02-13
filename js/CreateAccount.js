//取得頁面輸入帳號密碼
function login() {console.log();
var userEmail = document.getElementById("email_field").value;
var userPass = document.getElementById("password_field").value;

//firsbase建立新帳戶
firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
.then(function(){
    alert("創建成功")
    location.href="../index.html"
})
.catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ...
  });
}