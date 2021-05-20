function initBurgerListener() {
	const burgerButton = document.getElementById('burgerButton');

	if (burgerButton) {
		burgerButton.addEventListener('change', toggleElementsVisibility);
	}
}

function toggleElementsVisibility() {
	const languageSwitcher = document.getElementById('languageSwitcher');
	const formContainer = document.getElementById('formContainer');
	const homeBaner = document.getElementById('homeBaner');

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
