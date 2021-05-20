function initializeTrainingPagesListener() {
	const trainingContainer = document.getElementById('trainingContainer');

	if (trainingContainer) {
		trainingContainer.addEventListener('click', showAdditionalInfo);
	}
}

function showAdditionalInfo(e) {
	const condition = e.target.classList.contains('aditional-info__button');
	console.log(e.target);
	if (condition) {
		e.target.closest('.training').classList.add('visible');
		e.target.classList.add('hidden');
	}
}
