const btns = document.querySelectorAll("button"),
	wrapper = document.querySelector(".wrapper")

// btns.forEach((button, index) => {
// 	console.log(index +1, button.classList);
// })

btns[1].classList.add("yellow")	// classList.add - yangi class qo'shish
btns[2].classList.toggle("green") // classList.toggle - agar shu class bo'lsa o'chiradi, yo'q bo'lsa qo'shadi
btns[0].classList.remove("red") //  classList.remove - class ni o'chiradi
btns[2].classList.contains("green") // classList.contains - class bo'lsa true qaytaradi, yo'q bo'lsa false

btns[3].addEventListener("click", () => {
	btns[3].classList.toggle("red")
})

wrapper.addEventListener("click", event  => {
	if(event.target && event.target.tagName === "BUTTON") {
		console.log("CLICKED");
	}
})

const button = document.createElement("button")
button.classList.add("green")
button.textContent = 6
wrapper.append(button)