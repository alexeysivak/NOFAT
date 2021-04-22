document.addEventListener('DOMContentLoaded', switchChosenLanguageButton);

function switchChosenLanguageButton() {
	const languageDisplayButton = document.querySelector(`#languageSwitcher button[name=${currentLanguage}]`);

	languageDisplayButton.classList.add('chosen-lang');
}

const languageSwitcher = document.getElementById('languageSwitcher');
languageSwitcher.addEventListener('click', (e) => {
	if (e.target.getAttribute('name')) {
		switchLanguage(e.target);
	}
});

function switchLanguage(clickedLanguageButton) {
	const chosenLanguage = clickedLanguageButton.getAttribute('name');

	let splittedCurrentPageURL = window.location.href.split('/');

	splittedCurrentPageURL.reverse()[1] = chosenLanguage;

	const newPageURL = splittedCurrentPageURL.reverse().join('/');

	window.location.href = newPageURL;
}
