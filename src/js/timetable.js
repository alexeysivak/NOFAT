const timetables = [
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
];

const timetableContainer = document.getElementById('timetableContainer');

isDaysContainerPresent();

function isDaysContainerPresent() {
	const daysContainer = document.getElementById('daysContainer');

	if (daysContainer) {
		document.addEventListener('DOMContentLoaded', createTimetable);
		daysContainer.addEventListener('click', createTimetable);
	}
}

function createTimetable(e) {
	let day;
	if (e.type === 'click') {
		day = e.target.getAttribute('Id');
	} else {
		day = getCurrentDay();
	}

	showDay(day);

	const neededTimetable = timetables.find((item) => item[day]);

	renderTraining(neededTimetable[day]);
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
    		<p class="timetable__item-trainer">тренер - ${training.trainer}</p>
		</div>`;

		timetableContainer.insertAdjacentHTML('beforeend', trainingTemplate);
	});
}

/**
 *  downloading timetable
 */

const downloadButton = document.getElementById('downloadButton');

isDownloadButtonPresent();

function isDownloadButtonPresent() {
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
