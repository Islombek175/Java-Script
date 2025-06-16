// Tabs

window.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabContents = document.querySelectorAll('.tab_content'),
		tabsParent = document.querySelector('.tabheader__items')

	function hideTabContents() {
		tabContents.forEach(tabContent => {
			tabContent.style.display = 'none'
		})
		tabs.forEach(tab => {
			tab.classList.remove('tabheader__item_active')
		})
	}

	function showTabConten(index) {
		tabs[index].classList.add('tabheader__item_active')
		tabContents[index].style.display = 'flex'
	}

	hideTabContents()

	tabsParent.addEventListener('click', event => {
		const target = event.target
		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((tab, index) => {
				if (target === tab) {
					hideTabContents()
					showTabConten(index)
				}
			})
		}
	})
})

// Loader

const loaderWrapper = document.querySelector('.loader-wrapper')

setTimeout(() => {
	loaderWrapper.style.display = 'none'
}, 1500)

// Timer

const deadline = '2025-07-10'

function getTimerRemainig(endtime) {
	let days, hours, minutes, seconds
	const time = Date.parse(endtime) - Date.parse(new Date())
	
	if (time <= 0) {
		days = 0
		hours = 0
		minutes = 0
		seconds = 0
	} else {
		days = Math.floor(time / (1000 * 60 * 60 * 24))
		hours = Math.floor((time / (1000 * 60 * 60)) % 24)
		minutes = Math.floor((time / (1000 * 60)) % 60)
		seconds = Math.floor((time / 1000) % 60)
	}

	return {
		totalTime: time,
		days,
		hours,
		minutes,
		seconds,
	}
}

function formatNumber(number) {
	if (number >= 0 && number < 10) {
		return `0${number}`
	} else {
		return number
	}
}

function setTimer(selector, endtime) {
	const time = document.querySelector(selector),
		days = time.querySelector('#days'),
		hours = time.querySelector('#hours'),
		minutes = time.querySelector('#minutes'),
		seconds = time.querySelector('#seconds')
	updateTimer()
	timeInterval = setInterval(updateTimer, 1000)

	function updateTimer() {
		const time = getTimerRemainig(endtime)

		days.textContent = formatNumber(time.days)
		hours.textContent = formatNumber(time.hours)
		minutes.textContent = formatNumber(time.minutes)
		seconds.textContent = formatNumber(time.seconds)

		if (time.totalTime <= 0) {
			clearInterval(timeInterval)
		}
	}
}
setTimer('.timer', deadline)
