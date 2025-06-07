const advs = document.querySelector('.promo__adv'),
	genre = document.querySelector('.promo__genre'),
	bg = document.querySelector('.promo__bg'),
	addForm = document.querySelector('.add'),
	input = document.querySelector('.adding__input'),
	seriesList = document.querySelector('.promo__interactive-list');

let seriesDB = [
	"OMAR", "The Final Legacy", "ERTUGRUL", "MAGNIFICENT CENTURY", "GREAT SELJUKS: GUARDIANS..."
];

advs.remove()
genre.textContent = 'COMEDY'
bg.style.backgroundImage = 'url(./img/1.jpg)'

addForm.addEventListener('submit', event => {
	event.preventDefault()
	let newSerie = input.value
	seriesDB.push(newSerie)
	console.log(seriesDB);
	setList()
})

function sort()  {
	seriesDB.sort()
}

function setList() {
	sort()
	seriesList.innerHTML = ""
	seriesDB.forEach((item, index) => {
		seriesList.innerHTML += `
		<li class="promo__interactive-item">
			${index +1}. ${item}
			<div class="delete"></div>`
	})

	document.querySelectorAll(".delete").forEach((trashBtn, index) => {
		trashBtn.addEventListener("click", () => {
			trashBtn.parentElement.remove()
			seriesDB.splice(index, 1)
		})
	})
}

setList()
