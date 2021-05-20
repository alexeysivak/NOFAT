function initializePageSwitching() {
	const navigationMenuItems = document.querySelectorAll('#navigationMenu a[href]');

	document.addEventListener('DOMContentLoaded', setCurrentPage);

	function setCurrentPage() {
		for (let item of navigationMenuItems) {
			if (window.location.href.includes(item.href)) {
				item.classList.add('currant-page');
			}
		}
	}
}
