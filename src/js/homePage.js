const languageSwitcher = document.getElementById('languageSwitcher');
const burgerButton = document.getElementById('burgerButton');
const formContainer = document.getElementById('formContainer');

burgerButton.addEventListener('change', setLenguageSwitcher);

function setLenguageSwitcher() {
	if (burgerButton.checked) {
		languageSwitcher.classList.add('hidden');
		formContainer.classList.add('hidden');
	} else {
		languageSwitcher.classList.remove('hidden');
		formContainer.classList.remove('hidden');
	}
}
