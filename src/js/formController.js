initializeFormListeners();

function initializeFormListeners() {
	const clientForm = document.getElementById('clientForm');
	const footerForm = document.getElementById('footerForm');

	if (clientForm) {
		clientForm.addEventListener('submit', (e) => {
			e.preventDefault();
			sendFormDataToBot(e);
		});
	}

	if (footerForm) {
		footerForm.addEventListener('submit', (e) => {
			e.preventDefault();
			sendFormDataToBot(e);
		});
	}
}

function sendFormDataToBot(e) {
	const BASE_URL = 'https://api.telegram.org/';
	const TELEGRAMM_BOT_TOKEN = '1710732145:AAG64Zeg_kspyeaiuQsoISSyUTrBFGLOcL8';
	const TELEGRAMM_BOT_CHAT_ID = '815588450';
	const parse_mode = 'HTML';
	const formData = getClientsData(e);

	let data = {
		chat_id: TELEGRAMM_BOT_CHAT_ID,
		parse_mode: parse_mode,
		text: formData,
	};

	let options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	};

	fetch(`${BASE_URL}bot${TELEGRAMM_BOT_TOKEN}/sendMessage`, options)
		.then(() => showSuccessMessage())
		.catch(() => showFailMessage());

	const sentFormBlock = e.target.parentElement;

	function showSuccessMessage() {
		const RESPONSE_STATUS = 'successed';

		const successMessageTemplate = getMessageTemplate(RESPONSE_STATUS);

		sentFormBlock.innerHTML = successMessageTemplate;
	}

	function showFailMessage() {
		const RESPONSE_STATUS = 'failes';

		const successMessageTemplate = getMessageTemplate(RESPONSE_STATUS);

		sentFormBlock.innerHTML = successMessageTemplate;
	}

	function getMessageTemplate(RESPONSE_STATUS) {
		const succesMultiLanguageMessages = {
			ru: `<div class="form__message"><p class="text_orange">Спасибо!</p><p class="text_light">В ближайшее время с вами свяжется наш менеджер.</p></div>`,
			ua: `<div class="form__message"><p class="text_orange">Дякуємо!</p><p class="text_light">Найближчим часов з вами зв'яжеться наш менеджер.</p></div>`,
			en: `<div class="form__message"><p class="text_orange">Thanks!</p><p class="text_light">Our manager will contact you in the near future.</p></div>`,
		};

		const failMultiLanguageMessages = {
			ru: `<div class="form__message"><p class="text_orange">Извините, при отправке произошла ошибка.</p><p class="text_light">Свяжитесь с нами по номеру 
			+38(044-25-25-225).</p></div>`,
			ua: `<div class="form__message"><p class="text_orange">Вибачте при відправці сталась помилка.</p><p class="text_light">Зв'яжіться з нами по номеру +38(044-25-25-225).</p></div>`,
			en: `<div class="form__message"><p class="text_orange">Sorry, an error occurred while sending.</p><p class="text_light">Сontact us at +38 (044-25-25-225).</p></div>`,
		};

		// Variable currentLanguage located in globals. Contains abbreviation which shows page language.
		if (RESPONSE_STATUS === 'successed') {
			return succesMultiLanguageMessages[currentLanguage];
		}

		return failMultiLanguageMessages[currentLanguage];
	}
}

function getClientsData(e) {
	let clientData = `page language: ${currentLanguage};\nform location: ${currentPage}\n`;

	const clientsFormData = new FormData(e.target);
	for (let [name, value] of clientsFormData) {
		clientData += `${name}: ${value};\n`;
	}

	return clientData;
}
