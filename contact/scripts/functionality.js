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

/* The iframe takes an amount of time to load. To prevent the paritally display of the iframe,
because it is not fully loaded, a timeout is set when displaying the iframe for the first time.
*/
window.initLocalContent = function initLocalContent() {
	setTimeout(function() {
		contactForm = document.getElementById('contactForm');
		contactForm.style.display = 'block';
	}, 800);
};
