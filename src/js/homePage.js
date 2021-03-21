/**
 * home page
 */

const languageSwitcher = document.getElementById('languageSwitcher');
const burgerButton = document.getElementById('burgerButton');
const formContainer = document.getElementById('formContainer');
const homeBaner = document.getElementById('homeBaner');

burgerButton.addEventListener('change', toggleElementsVisibility);

function toggleElementsVisibility() {
	if (burgerButton.checked) {
		languageSwitcher.classList.add('hidden');
		formContainer.classList.add('hidden');
	}
	if (window.screen.width <= 768 && burgerButton.checked) {
		languageSwitcher.classList.add('hidden');
		formContainer.classList.add('hidden');
		homeBaner.classList.add('hidden');
	}
	if (!burgerButton.checked) {
		languageSwitcher.classList.remove('hidden');
		formContainer.classList.remove('hidden');
		homeBaner.classList.remove('hidden');
	}
}

/**
 * home page end
 */

/**
 * trainings page
 */
const trainingContainer = document.getElementById('trainingContainer');
trainingContainer.addEventListener('click', showAdditionalInfo);

function showAdditionalInfo(e) {
	const condition = e.target.classList.contains('aditional-info__button');
	console.log(e.target);
	if (condition) {
		e.target.closest('.training').classList.add('visible');
		e.target.classList.add('hidden');
	}
}

/**
 * trainings page end
 */
