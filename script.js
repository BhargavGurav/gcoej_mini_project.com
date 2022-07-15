function log_in() {
	document.getElementById('log-in').style.cssText = "display: block;";
	document.getElementById('sign-up').style.cssText = "display: none;";

}
function sign_in() {
	document.getElementById('sign-up').style.cssText = "display: block;";
	document.getElementById('log-in').style.cssText = "display: none;";

	// body...
}
function completion() {
	document.getElementById('sign-up').style.cssText = "display: none;";
	document.getElementById('registerationMessage').innerHTML = 'Registered User.....';
	let name = document.getElementById('name').value;
	document.getElementById('user').styke.cssText = "display: block;";
	let signs = document.getElementsByClassName('sign');
	for (var i = 0; i < signs.length; i++) {
		signs[i].style.cssText = "display: none;"
	}
	document.getElementById('user').value = name;
}