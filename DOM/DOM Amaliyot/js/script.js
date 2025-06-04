let removeButton = document.querySelector(".remove_button")
let advTextelement = document.querySelector(".promo__adv-title")
let ads = document.querySelectorAll(".adv")
let promoGenreElement = document.querySelector(".promo__genre")
let series = document.querySelectorAll(".promo__interactive-item")

removeButton.addEventListener("click", function () {
	ads.forEach(item => {
		item.remove()
	});
	removeButton.remove();
	advTextelement.remove()
})

promoGenreElement.innerText = "KOMEDIYA"

document.querySelector(".promo__bg").style.background.url = "../img/1.jpg"

function showSeries() {
	series.forEach(item => {
		
	})
}
