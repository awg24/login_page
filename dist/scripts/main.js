$(document).ready(function(){

	$username = $("#username");
	$password = $("#password");
	$form = $("#login");

	var acceptableUsernames = ["aaron@theironyard.com", "admin@google.com"];
	var acceptablePasswordForUsername = ["password123","pandas"];

	$form.on("submit", validateInfo);

	function validateInfo(event){
		event.preventDefault();
		var usernameIndex = acceptableUsernames.indexOf($username.val())
		var passwordIndex = acceptablePasswordForUsername.indexOf($password.val())

		if($username.val() === "" || $password.val() === ""){
			$username.focus();
			sendError(0);
		} else if(usernameIndex === -1){
			$username.focus();
			$password.val("");
			sendError(2);
		} else if(usernameIndex !== passwordIndex){
			sendError(1);
			$username.focus();
			$password.val("");
		} else {
			sendError();
			window.location.href = "http://theironyard.com";
		}
	}
	
	function sendError(errorCode){
		var $error = $("#error");
		$error.css("color","red");

		switch(errorCode){
			case 0: $error.html("*Username AND password must not be blank!");
			break;
			case 1: $error.html("*Password is incorrect!");
			break;
			case 2: $error.html("*Username does not exist!");
			break;
			default: $error.html("");
		}
		
		
	}
});