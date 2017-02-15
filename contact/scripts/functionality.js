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

window.initLocalContent = function initLocalContent() {
	/* Switching on the iframe is done by function in html. 
	This function is defined to prevent switching the content on on by showContent().
	*/
};
