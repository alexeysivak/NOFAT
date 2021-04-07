document.addEventListener('DOMContentLoaded', switchChosenLanguageButton);

function switchChosenLanguageButton() {
	const currentLanguage = getCurrentLanguage();

	const languageDisplayButton = document.querySelector(`#languageSwitcher button[name=${currentLanguage}]`);

	languageDisplayButton.classList.add('chosen-lang');
}

function getCurrentLanguage() {
	const currantPageUrl = window.location.href;

	const currentLanguage = currantPageUrl.split('/').reverse()[1];

	return currentLanguage;
}

const languageSwitcher = document.getElementById('languageSwitcher');
languageSwitcher.addEventListener('click', switchLanguage);

function switchLanguage(e) {
	const chosenLanguage = e.target.getAttribute('name');

	let splittedCurrentPageURL = window.location.href.split('/');

	splittedCurrentPageURL.reverse()[1] = chosenLanguage;

	const newPageURL = splittedCurrentPageURL.reverse().join('/');

	window.location.href = newPageURL;
}
