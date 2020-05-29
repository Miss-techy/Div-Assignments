
//login form functionality
$(window).on("hashchange", function(){
	if(location.hash.slice(1)=="register"){
		$(".card").addClass("extend");
		$("#login").removeClass("selected");
		$("#register").addClass("selected");
	} else {
		$(".card").removeClass("extend");
		$("#login").addClass("selected");
		$("#register").removeClass("selected");
	}
});
$(window).trigger("hashchange");



/*

function signup() {

var signupUser = document.getElementById("signupUser").value;
var signupEmail = document.getElementById("signupEmail").value;
var signupPassword = document.getElementById("signupPassword").value;
var confirmPassword = document.getElementById("confirmPassword").value;
var errorElement = document.getElementById('error');


  let messages = [];

  if (signupUser === '' || signupUser == null) {
    messages.push('Name is required')
  }

  else if (signupPassword.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  else if (signupPassword.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  else if (signupPassword === 'password') {
    messages.push('Password cannot be password')
  }

  else if (!(signupPassword === confirmPassword)) {
    messages.push('Enter correct password')
  }

else{

 var userSignupDetails = {username: signupUser, email: signupEmail, password:signupPassword};
 localStorage.setItem('details', userSignupDetails)
 localStorage.getItem(details)
console.log(details);


}



function login(){


var loginEmail = document.getElementById("loginEmail").value;
var loginPassword = document.getElementById("loginPassword").value;
var errorElement = document.getElementById('error');

let errorMsg = []

if(!(loginEmail === details.email)){
errorMsg.push('Invalid Email');
}

else if(!(loginPassword === details.password)){
errorMsg.push('Invalid Password');
}

else{
	errorMsg.push('Login Successful');
}

}

*/
