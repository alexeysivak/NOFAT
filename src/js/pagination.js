const ITEMS_ON_PAGE = 4;

const pagination = document.getElementById('pagination');
const trainersList = document.getElementById('trainersList');
const trainersCollection = document.getElementsByClassName('trainer');
const postsBlock = document.getElementById('postsBlock');
const postsCollection = document.getElementsByClassName('blog__post');
const paginationButtons = document.getElementsByClassName('pagination__button');

initializeList();

function initializeList() {
	if (trainersCollection[0]) {
		getPaginationNumbers(trainersCollection);

		loadCollectionItems(trainersCollection);

		pagination.addEventListener('click', reRenderList);
	}

	if (postsCollection[0]) {
		getPaginationNumbers(postsCollection);

		loadCollectionItems(postsCollection);

		pagination.addEventListener('click', reRenderList);
	}
}

/**
 *  pagination
 *
 */
function getPaginationNumbers(collection) {
	removePagination();
	let pagesNumber = collection.length / ITEMS_ON_PAGE;
	let paginationNumbers = [];

	for (let i = pagesNumber; i > 0; i--) {
		paginationNumbers.push(Math.ceil(i));
	}

	createPaginationHtml(paginationNumbers);
}

function removePagination() {
	pagination.innerHTML = null;
}

function createPaginationHtml(paginationNumbers) {
	for (let number of paginationNumbers) {
		let numberHtml = createPaginationItemHtml(number);
		renderPaginationHtml(numberHtml);
	}
}

function createPaginationItemHtml(number) {
	return `<button class="pagination__button" data-id=${number}>${number}</button>`;
}

function renderPaginationHtml(paginationHtml) {
	pagination.insertAdjacentHTML('afterbegin', paginationHtml);
}

/**
 * list rendering
 *
 */

function reRenderList(e) {
	let pageNumber = e.target.getAttribute('data-id');

	let collection = trainersCollection[0] ? trainersCollection : postsCollection;

	if (pageNumber) {
		clearList(collection, +pageNumber);

		getPaginationNumbers(collection);

		loadCollectionItems(collection, +pageNumber);

		changeButtons(e);
	}
}

function clearList(collection) {
	for (let trainer of collection) {
		if (!trainer.classList.contains('hidden')) {
			hideItems(trainer);
		}
	}
}

function hideItems(archiveItem) {
	archiveItem.classList.add('hidden');
}

function loadCollectionItems(collection, chosenSublist) {
	let start = getFirstItem(chosenSublist);
	let end = getLastItem(start);

	divideList(collection, start, end);

	paginationButtons[0].classList.add('pagination__button-active');
}

function getFirstItem(pageToLoadNumber) {
	if (!pageToLoadNumber) {
		return 0;
	} else {
		return ITEMS_ON_PAGE * (pageToLoadNumber - 1);
	}
}

function getLastItem(start) {
	return start - 1 + ITEMS_ON_PAGE;
}

function divideList(collection, start, end) {
	clearList(collection);

	for (let i = start; i <= end; i++) {
		if (collection[i]) {
			renderList(collection[i]);
		}
	}
}

function renderList(archiveItem) {
	archiveItem.classList.remove('hidden');
}

function changeButtons(e) {
	let pageNumber = e.target.getAttribute('data-id');
	for (let i = 0; i < paginationButtons.length; i++) {
		let buttonNumber = paginationButtons[i].getAttribute('data-id');
		if (buttonNumber === pageNumber) {
			paginationButtons[i].classList.add('pagination__button-active');
		} else {
			paginationButtons[i].classList.remove('pagination__button-active');
		}
	}
}
