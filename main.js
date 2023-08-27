function sendWA() {
	let name = document.getElementById('_name');
	let email = document.getElementById('_replyto');
	let textInput = document.getElementById('message');
  let mobileNumber = +6281237150892;    //Enter your mobile number here

	if (name.value.trim() == "") {
		name.style.background = "lightpink";
		name.style.border = "4px solid red";
		alert('Please Enter your Name');
		return false;
	}

	let url = `https://wa.me/${mobileNumber}?text=` + "Name: " + name.value + "%0a" + "Email ID: " + email.value + "%0a" + "Message: " + textInput.value;

	window.open(url, '_blank').focus();
}