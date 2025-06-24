const person = {
	 firstName: "Islombek",
	 lastName: "Matkarimov",
	 hobbies: {
		sport: "Fishing",
		games: "MLBB",
	 }
}

const objToJson = JSON.stringify(person); // Object - JSON formatga o'girish
const jsonToObj = JSON.parse(objToJson)

const clonePerson = JSON.parse(JSON.stringify(person)) // Object ni chuqur clone lash JSON yordamida
console.log(clonePerson);


// 1. Har doim serverga ma'lumot yuborsak, JSON formatda bo'lishi shart
// 2. Har doim server JSON formatda ma'lumot qaytaradi



const sum = document.querySelector("#sum"),
	usd = document.querySelector("#usd")

sum.addEventListener("input", () => {
	const request = new XMLHttpRequest()

	request.open("GET", "./current.json")
	request.setRequestHeader("Current-Type", "application/json")
	request.send()

	request.addEventListener("load", () => {
		if(request.status === 200) {
			const data = JSON.parse(request.response)
			console.log(usd.value = (+sum.value / data.current.usd).toFixed(2))
		}
	})





})