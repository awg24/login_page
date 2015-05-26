$(document).ready(function(){

	$button = $("#submit");
	$name = $("#name");
	$email = $("#email");
	$site = $("#website");
	$message = $("#message");

	$container = $("#container");

	var domArray = [$name,$email,$site,$message];

	$email.on("keyup",realTimeEmailCheck);
	$site.on("keyup",realTimeSiteCheck);

	$button.on("click",validate);

	function realTimeSiteCheck(event){

		var siteSubString = $site.val().substring(0,7);

		if(event.keyCode === 8){
			if(domArray[2].val() === ""){
				domArray[2].css("border-left","5px solid black");
			}
		} else if(siteSubString !== "http://"){
			var $validation = $("#2");
			$validation.css("color","red");
			domArray[2].css("border-left","5px solid red");
		} else {
			domArray[2].css("border-left","5px solid black");
		}
	}

	function realTimeEmailCheck(){

		var emailArray = $email.val().split("");
		var isPresent = false;
		if(event.keyCode === 8){
			if(domArray[1].val() === ""){
				domArray[1].css("border-left","5px solid black");
			} else {
				domArray[1].css("border-left","5px solid red");
			}
		} else {
			for(var i = 0; i < emailArray.length; i++){
				if(emailArray[i] === "@"){
					isPresent = true;
				}	
			}

			if(!isPresent){
				domArray[1].css("border-left","5px solid red");
			} else {
				domArray[1].css("border-left","5px solid black");
			}
		}
	}

	function validate(){

		var isPresent = false;
		var canProcedeCheck1 = false;
		var canProcedeCheck2 = false;
		var emailArray = $email.val().split("");
		var websiteSubString = $site.val().substring(0,7);

		for(var i = 0; i < emailArray.length; i++){
			if(emailArray[i] === "@"){
				isPresent = true;
			}
			
		}

		for(var i = 0; i < domArray.length; i++){
			if(domArray[i].val() === ""){
				var $validation = $("#"+i.toString());
				$validation.css("color","red");
				domArray[i].css("border-left","5px solid red");
				$validation.html("*Must not be blank");
			} else {
				var $validation = $("#"+i.toString());
				$validation.html("")
				domArray[i].css("border-left","5px solid black");

				if(websiteSubString !== "http://"){
					var $validation = $("#2");
					$validation.css("color","red");
					domArray[1].css("border-left","5px solid red");
					$validation.html("*Website must start with http://");
				} else {
					canProcedeCheck2 = true;
				}

				if(!isPresent){
					var $validation = $("#1");
					$validation.css("color","red");
					domArray[1].css("border-left","5px solid red");
					$validation.html("*Must contain an '@'");
				} else {
					canProcedeCheck1 = true;
				}
			}
		}

		if(canProcedeCheck1 && canProcedeCheck2){
			newDisplay();
		}	
	}

	function newDisplay(){
		var htmlSuccess = "Thank You for contacting us! We have received your message and will be in touch with you shortly";
		$container.css("height", "100px");
		$container.css("width", "800px");
		$container.css("font-size", "20px");
		$container.css("padding", "20px");
		$container.html(htmlSuccess);
	}
	
});