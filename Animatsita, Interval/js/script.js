const btn = document.querySelector("#btn")

// let timerId, 
// 	index = 0

// btn.addEventListener("click", () => {
// 	timerId = setInterval(logger, 500)
// })
	
// function logger() {
// 	if(index === 4) {
// 		clearInterval(timerId)
// 	}
// 	console.log(index +1, "Hello world!");
// 	index += 1
// }

// setTimeot - bu bir function necha dir sekunda ishga tushadi
// setInterval - bu bir function HAR nechadir sekunda ishga tushadi




const moveCar = () => {
	const car = document.querySelector(".car")
	let left = 0
	
	const animation = setInterval(drive, 100)
	
	function drive() {
		if(left >= 1000) {
			clearInterval(animation)
		}
		left += 50
		car.style.left = left + "px"
	}
}
	
btn.addEventListener('click', moveCar)
