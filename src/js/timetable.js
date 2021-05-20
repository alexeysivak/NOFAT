const multilanguageTimetables = {
	ru: [
		{
			Monday: [
				{ time: '07:00-08:00', training: 'Йога', trainer: 'Инна Шатулькина' },
				{ time: '08:00-09:00', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '09:00-10:00', training: 'Йога', trainer: 'Инна Шатулькина' },
				{ time: '10:00-11:00', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '11:00-12:30', training: '90/60/90', trainer: 'Олег Бойко' },
				{ time: '14:00-16:00', training: 'Circular training', trainer: 'Игорь Ласточкин' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Алексей Птушкин' },
				{ time: '18:00-19:30', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '19:30-21:00', training: 'Stretching', trainer: 'Валерия Иванова' },
			],
		},
		{
			Tuesday: [
				{ time: '07:00-08:00', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '08:00-09:00', training: '90/60/90', trainer: 'Олег Бойко' },
				{ time: '09:00-10:00', training: 'Torso', trainer: 'Алексей Птушкин' },
				{ time: '10:00-11:00', training: 'Йога', trainer: 'Инна Шатулькина' },
				{ time: '11:00-12:30', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '14:00-16:00', training: 'Circular training', trainer: 'Игорь Ласточкин' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Алексей Птушкин' },
				{ time: '18:00-19:30', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '19:30-21:00', training: 'Stretching', trainer: 'Валерия Иванова' },
			],
		},
		{
			Wednsday: [
				{ time: '07:00-08:00', training: 'Stretching', trainer: 'Валерия Иванова' },
				{ time: '08:00-09:00', training: 'Circular training', trainer: 'Игорь Ласточкин' },
				{ time: '09:00-10:00', training: 'Йога', trainer: 'Инна Шатулькина' },
				{ time: '10:00-11:00', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '11:00-12:30', training: '90/60/90', trainer: 'Олег Бойко' },
				{ time: '14:00-16:00', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Алексей Птушкин' },
				{ time: '18:00-19:30', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '19:30-21:00', training: 'Йога', trainer: 'Инна Шатулькина' },
			],
		},
		{
			Thursday: [
				{ time: '07:00-08:00', training: 'Йога', trainer: 'Инна Шатулькина' },
				{ time: '08:00-09:00', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '09:00-10:00', training: 'Torso', trainer: 'Алексей Птушкин' },
				{ time: '10:00-11:00', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '11:00-12:30', training: '90/60/90', trainer: 'Олег Бойко' },
				{ time: '14:00-16:00', training: 'Circular training', trainer: 'Игорь Ласточкин' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Алексей Птушкин' },
				{ time: '18:00-19:30', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '19:30-21:00', training: 'Stretching', trainer: 'Валерия Иванова' },
			],
		},
		{
			Friday: [
				{ time: '07:00-08:00', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '08:00-09:00', training: '90/60/90', trainer: 'Олег Бойко' },
				{ time: '09:00-10:00', training: 'Йога', trainer: 'Инна Шатулькина' },
				{ time: '10:00-11:00', training: 'Йога', trainer: 'Инна Шатулькина' },
				{ time: '11:00-12:30', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '14:00-16:00', training: 'Circular training', trainer: 'Игорь Ласточкин' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Алексей Птушкин' },
				{ time: '18:00-19:30', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '19:30-21:00', training: 'Stretching', trainer: 'Валерия Иванова' },
			],
		},
		{
			Saturday: [
				{ time: '07:00-08:00', training: 'Stretching', trainer: 'Валерия Иванова' },
				{ time: '08:00-09:00', training: 'Circular training', trainer: 'Игорь Ласточкин' },
				{ time: '09:00-10:00', training: 'Йога', trainer: 'Инна Шатулькина' },
				{ time: '10:00-11:00', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '11:00-12:30', training: '90/60/90', trainer: 'Олег Бойко' },
				{ time: '14:00-16:00', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Алексей Птушкин' },
				{ time: '18:00-19:30', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '19:30-21:00', training: 'Йога', trainer: 'Инна Шатулькина' },
			],
		},
		{
			Sunday: [
				{ time: '07:00-08:00', training: 'Йога', trainer: 'Инна Шатулькина' },
				{ time: '08:00-09:00', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '09:00-10:00', training: 'Йога', trainer: 'Инна Шатулькина' },
				{ time: '10:00-11:00', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '11:00-12:30', training: '90/60/90', trainer: 'Олег Бойко' },
				{ time: '14:00-16:00', training: 'Circular training', trainer: 'Игорь Ласточкин' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Алексей Птушкин' },
				{ time: '18:00-19:30', training: 'Пилатес', trainer: 'Валерия Цыбульская' },
				{ time: '19:30-21:00', training: 'Stretching', trainer: 'Валерия Иванова' },
			],
		},
	],
	ua: [
		{
			Monday: [
				{ time: '07:00-08:00', training: 'Йога', trainer: 'Інна Шатулькіна' },
				{ time: '08:00-09:00', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '09:00-10:00', training: 'Йога', trainer: 'Інна Шатулькіна' },
				{ time: '10:00-11:00', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '11:00-12:30', training: '90/60/90', trainer: 'Олег Бойко' },
				{ time: '14:00-16:00', training: 'Circular training', trainer: 'Ігор Ласточкін' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Олексій Птушкін' },
				{ time: '18:00-19:30', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '19:30-21:00', training: 'Stretching', trainer: 'Валерія Іванова' },
			],
		},
		{
			Tuesday: [
				{ time: '07:00-08:00', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '08:00-09:00', training: '90/60/90', trainer: 'Олег Бойко' },
				{ time: '09:00-10:00', training: 'Torso', trainer: 'Олексій Птушкін' },
				{ time: '10:00-11:00', training: 'Йога', trainer: 'Інна Шатулькіна' },
				{ time: '11:00-12:30', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '14:00-16:00', training: 'Circular training', trainer: 'Ігор Ласточкін' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Олексій Птушкін' },
				{ time: '18:00-19:30', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '19:30-21:00', training: 'Stretching', trainer: 'Валерія Іванова' },
			],
		},
		{
			Wednsday: [
				{ time: '07:00-08:00', training: 'Stretching', trainer: 'Валерія Іванова' },
				{ time: '08:00-09:00', training: 'Circular training', trainer: 'Ігор Ласточкін' },
				{ time: '09:00-10:00', training: 'Йога', trainer: 'Інна Шатулькіна' },
				{ time: '10:00-11:00', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '11:00-12:30', training: '90/60/90', trainer: 'Олег Бойко' },
				{ time: '14:00-16:00', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Олексій Птушкін' },
				{ time: '18:00-19:30', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '19:30-21:00', training: 'Йога', trainer: 'Інна Шатулькіна' },
			],
		},
		{
			Thursday: [
				{ time: '07:00-08:00', training: 'Йога', trainer: 'Інна Шатулькіна' },
				{ time: '08:00-09:00', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '09:00-10:00', training: 'Torso', trainer: 'Олексій Птушкін' },
				{ time: '10:00-11:00', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '11:00-12:30', training: '90/60/90', trainer: 'Олег Бойко' },
				{ time: '14:00-16:00', training: 'Circular training', trainer: 'Ігор Ласточкін' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Олексій Птушкін' },
				{ time: '18:00-19:30', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '19:30-21:00', training: 'Stretching', trainer: 'Валерія Іванова' },
			],
		},
		{
			Friday: [
				{ time: '07:00-08:00', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '08:00-09:00', training: '90/60/90', trainer: 'Олег Бойко' },
				{ time: '09:00-10:00', training: 'Йога', trainer: 'Інна Шатулькіна' },
				{ time: '10:00-11:00', training: 'Йога', trainer: 'Інна Шатулькіна' },
				{ time: '11:00-12:30', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '14:00-16:00', training: 'Circular training', trainer: 'Ігор Ласточкін' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Олексій Птушкін' },
				{ time: '18:00-19:30', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '19:30-21:00', training: 'Stretching', trainer: 'Валерія Іванова' },
			],
		},
		{
			Saturday: [
				{ time: '07:00-08:00', training: 'Stretching', trainer: 'Валерія Іванова' },
				{ time: '08:00-09:00', training: 'Circular training', trainer: 'Ігор Ласточкін' },
				{ time: '09:00-10:00', training: 'Йога', trainer: 'Інна Шатулькіна' },
				{ time: '10:00-11:00', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '11:00-12:30', training: '90/60/90', trainer: 'Олег Бойко' },
				{ time: '14:00-16:00', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Олексій Птушкін' },
				{ time: '18:00-19:30', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '19:30-21:00', training: 'Йога', trainer: 'Інна Шатулькіна' },
			],
		},
		{
			Sunday: [
				{ time: '07:00-08:00', training: 'Йога', trainer: 'Інна Шатулькіна' },
				{ time: '08:00-09:00', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '09:00-10:00', training: 'Йога', trainer: 'Інна Шатулькіна' },
				{ time: '10:00-11:00', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '11:00-12:30', training: '90/60/90', trainer: 'Олег Бойко' },
				{ time: '14:00-16:00', training: 'Circular training', trainer: 'Ігор Ласточкін' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Олексій Птушкін' },
				{ time: '18:00-19:30', training: 'Пілатес', trainer: 'Валерія Цибульська' },
				{ time: '19:30-21:00', training: 'Stretching', trainer: 'Валерія Іванова' },
			],
		},
	],
	en: [
		{
			Monday: [
				{ time: '07:00-08:00', training: 'Yoga', trainer: 'Inna Shatulkina' },
				{ time: '08:00-09:00', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '09:00-10:00', training: 'Yoga', trainer: 'Inna Shatulkina' },
				{ time: '10:00-11:00', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '11:00-12:30', training: '90/60/90', trainer: 'Oleg Boyko' },
				{ time: '14:00-16:00', training: 'Circular training', trainer: 'Igor Lastochkin' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Alexey Ptushkin' },
				{ time: '18:00-19:30', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '19:30-21:00', training: 'Stretching', trainer: 'Valeria Ivanov' },
			],
		},
		{
			Tuesday: [
				{ time: '07:00-08:00', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '08:00-09:00', training: '90/60/90', trainer: 'Oleg Boyko' },
				{ time: '09:00-10:00', training: 'Torso', trainer: 'Alexey Ptushkin' },
				{ time: '10:00-11:00', training: 'Yoga', trainer: 'Inna Shatulkina' },
				{ time: '11:00-12:30', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '14:00-16:00', training: 'Circular training', trainer: 'Igor Lastochkin' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Alexey Ptushkin' },
				{ time: '18:00-19:30', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '19:30-21:00', training: 'Stretching', trainer: 'Valeria Ivanov' },
			],
		},
		{
			Wednsday: [
				{ time: '07:00-08:00', training: 'Stretching', trainer: 'Valeria Ivanov' },
				{ time: '08:00-09:00', training: 'Circular training', trainer: 'Igor Lastochkin' },
				{ time: '09:00-10:00', training: 'Yoga', trainer: 'Inna Shatulkina' },
				{ time: '10:00-11:00', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '11:00-12:30', training: '90/60/90', trainer: 'Oleg Boyko' },
				{ time: '14:00-16:00', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Alexey Ptushkin' },
				{ time: '18:00-19:30', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '19:30-21:00', training: 'Yoga', trainer: 'Inna Shatulkina' },
			],
		},
		{
			Thursday: [
				{ time: '07:00-08:00', training: 'Yoga', trainer: 'Inna Shatulkina' },
				{ time: '08:00-09:00', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '09:00-10:00', training: 'Torso', trainer: 'Alexey Ptushkin' },
				{ time: '10:00-11:00', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '11:00-12:30', training: '90/60/90', trainer: 'Oleg Boyko' },
				{ time: '14:00-16:00', training: 'Circular training', trainer: 'Igor Lastochkin' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Alexey Ptushkin' },
				{ time: '18:00-19:30', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '19:30-21:00', training: 'Stretching', trainer: 'Valeria Ivanov' },
			],
		},
		{
			Friday: [
				{ time: '07:00-08:00', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '08:00-09:00', training: '90/60/90', trainer: 'Oleg Boyko' },
				{ time: '09:00-10:00', training: 'Yoga', trainer: 'Inna Shatulkina' },
				{ time: '10:00-11:00', training: 'Yoga', trainer: 'Inna Shatulkina' },
				{ time: '11:00-12:30', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '14:00-16:00', training: 'Circular training', trainer: 'Igor Lastochkin' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Alexey Ptushkin' },
				{ time: '18:00-19:30', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '19:30-21:00', training: 'Stretching', trainer: 'Valeria Ivanov' },
			],
		},
		{
			Saturday: [
				{ time: '07:00-08:00', training: 'Stretching', trainer: 'Valeria Ivanov' },
				{ time: '08:00-09:00', training: 'Circular training', trainer: 'Igor Lastochkin' },
				{ time: '09:00-10:00', training: 'Yoga', trainer: 'Inna Shatulkina' },
				{ time: '10:00-11:00', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '11:00-12:30', training: '90/60/90', trainer: 'Oleg Boyko' },
				{ time: '14:00-16:00', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Alexey Ptushkin' },
				{ time: '18:00-19:30', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '19:30-21:00', training: 'Yoga', trainer: 'Inna Shatulkina' },
			],
		},
		{
			Sunday: [
				{ time: '07:00-08:00', training: 'Yoga', trainer: 'Inna Shatulkina' },
				{ time: '08:00-09:00', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '09:00-10:00', training: 'Yoga', trainer: 'Inna Shatulkina' },
				{ time: '10:00-11:00', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '11:00-12:30', training: '90/60/90', trainer: 'Oleg Boyko' },
				{ time: '14:00-16:00', training: 'Circular training', trainer: 'Igor Lastochkin' },
				{ time: '16:00-18:00', training: 'Torso', trainer: 'Alexey Ptushkin' },
				{ time: '18:00-19:30', training: 'Pilates', trainer: 'Valeria Tsibulska' },
				{ time: '19:30-21:00', training: 'Stretching', trainer: 'Valeria Ivanov' },
			],
		},
	],
};

function initializeTimetable() {
	const daysContainer = document.getElementById('daysContainer');

	if (daysContainer) {
		document.addEventListener('DOMContentLoaded', createTimetable);
		daysContainer.addEventListener('click', createTimetable);
	}
}

function createTimetable(e) {
	let chosenDay = getCurrentDay();

	if (e.type === 'click' && e.target.getAttribute('Id')) {
		chosenDay = e.target.getAttribute('Id');
	}

	if (e.type === 'click' && !e.target.getAttribute('Id')) return;

	showDay(chosenDay);

	const timetableForCurrentLanguage = multilanguageTimetables[CURRENT_LANGUAGE];

	const timetableForChosenDay = timetableForCurrentLanguage.find((item) => item[chosenDay]);

	renderTraining(timetableForChosenDay[chosenDay]);
}

function getCurrentDay() {
	let currentDay = new Date().getDay();

	switch (currentDay) {
		case 0:
			return 'Sunday';
		case 1:
			return 'Monday';
		case 2:
			return 'Tuesday';
		case 3:
			return 'Wednsday';
		case 4:
			return 'Thursday';
		case 5:
			return 'Friday';
		case 6:
			return 'Saturday';
	}
}

function showDay(day) {
	const dayButtons = document.querySelectorAll('.timetable__day');

	Array.from(dayButtons).map((item) => item.classList.remove('chosen-day'));

	document.getElementById(day).classList.add('chosen-day');
}

function renderTraining(trainings) {
	timetableContainer.innerHTML = null;

	trainings.map((training) => {
		let trainingTemplate = `<div class="timetable__item">
    		<p class="timetable__item-time">${training.time}</p>
    		<p class="timetable__item-training">${training.training}</p>
    		<p class="timetable__item-trainer">${training.trainer}</p>
		</div>`;

		timetableContainer.insertAdjacentHTML('beforeend', trainingTemplate);
	});
}

/**
 *  downloading timetable
 */

function initTimetableDownloading() {
	const downloadButton = document.getElementById('downloadButton');

	if (downloadButton) {
		downloadButton.addEventListener('click', downloadTimetable);
	}
}

function downloadTimetable() {
	const opt = {
		margin: 1,
		filename: 'NoFat timetable.pdf',
		jsPDF: { unit: 'in', putOnlyUsedFonts: 'true', format: 'letter', orientation: 'portrait' },
	};

	window.html2pdf(timetableContainer, opt);
}
