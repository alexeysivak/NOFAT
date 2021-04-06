const languageSwitcher = document.getElementById('languageSwitcher');
languageSwitcher.addEventListener('click', switchLanguage);

function switchLanguage(e) {
	const chosenLanguage = e.target.getAttribute('name');

	let splittedCurrentPageURL = window.location.href.split('/');

	splittedCurrentPageURL.reverse()[1] = chosenLanguage;

	window.location.href = splittedCurrentPageURL.reverse().join('/');

	document.addEventListener('DOMContentLoaded', (chosenLanguage) => /*changeChosenLanguageButton(chosenLanguage)*/ console.log(chosenLanguage));
}

function changeChosenLanguageButton(chosenLanguage) {
	const languageSwitcherButtons = document.querySelectorAll('#languageSwitcher .lang-switcher__button');

	//languageSwitcherButtons.forEach((element) => element.classList.remove('chosen-lang'));

	console.log(languageSwitcherButtons);
}
