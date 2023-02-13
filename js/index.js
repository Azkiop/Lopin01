//連結button   #click="login()"
function login() {console.log();
//取得頁面輸入帳號密碼
var userEmail = document.getElementById("email_field").value;
var userPass = document.getElementById("password_field").value;

//登入帳號
firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
.then(function(){
  alert("登入成功")
  location.href="html/01.html"
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert("帳號或密碼錯誤");
});
}


function forgot() {console.log();
//重設密碼
const emailAddress = document.getElementById('forgot').value;
firebase.auth().sendPasswordResetEmail(emailAddress)
.then(function() {
  alert('已發送信件至信箱，請按照信件說明重設密碼');
  // 送信後，強制頁面重整一次
  window.location.reload(); 
})
.catch(function(error) {
  alert("查詢無此帳號");
});
}