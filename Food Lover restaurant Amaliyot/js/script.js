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

	function showTabContent(index) {
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
					showTabContent(index)
				}
			})
		}
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
		let timeInterval = setInterval(updateTimer, 1000)

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

	// Modal

	const modalOpenBtns = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal'),
		modalCloseBtn = document.querySelector('[data-modal-close-btn]'),
		modalContent = document.querySelector('.modal__content')

	function closeModal() {
		modal.classList.add('hide')
		modal.classList.remove('show')
		document.body.style.overflow = ''
		modalContent.classList.remove('modal-fade')
	}
	modalOpenBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			modal.classList.add('show')
			modal.classList.remove('hide')
			document.body.style.overflow = 'hidden'
			modalContent.classList.add('modal-fade')
		})
	})

	modal.addEventListener('click', event => {
		if (event.target == modal || event.target == modalCloseBtn) {
			closeModal()
		}
	})

	document.addEventListener('keydown', event => {
		if (event.code === 'Escape' && modal.classList.contains('show')) {
			closeModal()
		}
	})

	// Class

	class OfferMenu {
		constructor(src, alt, title, description, discount, sale, parentselector) {
			this.src = src
			this.alt = alt
			this.title = title
			this.description = description
			this.discount = discount
			this.sale = sale
			this.parent = document.querySelector(parentselector)
			this.formatToUSD()
		}

		formatToUSD() {
			this.discount = this.discount.toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD',
			})
			this.sale = this.sale.toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD',
			})
		}

		render() {
			const element = document.createElement('div')
			element.innerHTML = `
				<img src="${this.src}" alt="${this.alt}">
      	<div>
        	<h3>${this.title}</h3>
        	<p>${this.description}</p>
        	<p><del>${this.discount}</del> <span class="primary-text">${this.sale}</span></p>
      	</div>
			`

			this.parent.append(element)
		}
	}

	const offers = [
		{
			src: './img/offer1.png',
			alt: 'Quattro Pasta',
			title: 'Quattro Pasta',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.',
			discount: 55,
			sale: 20,
		},
		{
			src: './img/offer2.png',
			alt: 'Vegertarian Pasta',
			title: 'Vegertarian Pasta',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.',
			discount: 60,
			sale: 25,
		},
		{
			src: './img/offer3.png',
			alt: 'Gluten-Free Pasta',
			title: 'Gluten-Free Pasta',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.',
			discount: 70,
			sale: 30,
		},
	]

	offers.forEach(offer => {
		new OfferMenu(
			offer.src,
			offer.alt,
			offer.title,
			offer.description,
			offer.discount,
			offer.sale,
			'.offers-items'
		).render()
	})
})
