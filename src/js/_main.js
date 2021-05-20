const currantPageUrl = window.location.href;
const CURRENT_LANGUAGE = currantPageUrl.split('/').reverse()[1];
const CURRENT_PAGE = currantPageUrl.split('/').reverse()[0];

document.addEventListener('DOMContentLoaded', switchChosenLanguageButton);

initializeFormListeners();

initializePageSwitching();

initializeTrainingPagesListener();

initBurgerListener();

const timetableContainer = document.getElementById('timetableContainer');
initializeTimetable();

initTimetableDownloading();

const ITEMS_ON_PAGE = 4;

const pagination = document.getElementById('pagination');
const trainersCollection = document.getElementsByClassName('trainer');
const postsCollection = document.getElementsByClassName('blog__post');
const paginationButtons = document.getElementsByClassName('pagination__button');

initializeListsRendering();
