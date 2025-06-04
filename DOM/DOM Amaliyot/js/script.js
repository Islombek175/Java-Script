const advs = document.querySelector(".promo__adv"),
	genre = document.querySelector(".promo__genre"),
	bg = document.querySelector(".promo__bg");

const series = document.querySelectorAll(".promo__interactive-item")
let allSeries = [];

advs.remove()
genre.textContent = "COMEDY"
bg.style.backgroundImage = "url(./img/1.jpg)"

for (let i = 0; i < 5; i++) {
	allSeries.push(`${i+1}. ${series[i].textContent.trim()}`)
	series[i].textContent = `${i+1}. ${series[i].textContent}`
}

console.log(allSeries);