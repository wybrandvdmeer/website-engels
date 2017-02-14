function showEmailBox() {
	hideCurrentBackGround();
	emailBox = document.getElementsByClassName("background-email-box")[0];
	emailBox.style.display = 'block';
}

function hideEmailBox() {
	emailBox = document.getElementsByClassName("background-email-box")[0];
	emailBox.style.display = 'none';
	showCurrentBackGround();
}