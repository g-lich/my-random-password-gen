function getPassword(){
	var chars ="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	var length = 8;
	var password ="";

	for(var i =0; i<length;i++){
		var randomNum = Math.floor(Math.random() * chars.length);
		password += chars.substring(randomNum, randomNum+1);
	}
	document.getElementById("password").value = password;
}

function copyPassword(){
	var copyPassText = document.getElementById("password");
	copyPassText.select();
	copyPassText.setSelectionRange(0,9999);
	document.execCommand("copy");
}