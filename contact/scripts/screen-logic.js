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
	/* The iframe is switched on when it is loaded by a function in the html page.
	This function prevents switching the content on by showContent().
	*/
};
