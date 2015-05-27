$(document).ready(function(){

	$username = $("#username");
	$password = $("#password");
	$form = $("#login");

	$form.on("submit", validateInfo);

	function validateInfo(event){
		event.preventDefault();
		console.log("i work!");
	}
	
});