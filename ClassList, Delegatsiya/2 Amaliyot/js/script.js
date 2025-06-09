window.addEventListener("DOMContentLoaded", () => {
	const tabs = document.querySelectorAll(".tabheader__item"),
		tabContents = document.querySelectorAll(".tab_content"),
		tabParents = document.querySelectorAll(".tabheader__items")

	function hiddenTabContents() {
		tabContents.forEach(tabContent => {
			tabContent.style.display = "none"
		})

		tabs.forEach(tab => {
			tab.classList.remove("tabheader__item_active")
		})
	}

	function showTabContent(index) {
		tabContents[index].style.display = "block"
		tabs[index].style.add("tabheader__item_active")
	}

	hiddenTabContents()
	showTabContent(0)
})

