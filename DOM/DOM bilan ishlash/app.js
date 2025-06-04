let sayHello = document.createElement("h1")	// createElement - HTML da yangi element yaratadi
let sayGoodBye = document.createElement("h2")	// createElement - HTML da yangi element yaratadi
let box = document.querySelector(".box")
let container = document.querySelector(".container")
let letters = document.querySelectorAll(".letters")

sayHello.innerText = "Hello!"
sayGoodBye.innerText = "Good Bye!"

box.prepend(sayHello)		// prepend - boshiga qo'shib qo'yadi
box.append(sayGoodBye)	// append - ohiriga qo'shib qo'yadi

document.getElementById("saySalom").remove() // remove - HTML dagi elementni o'chirib tashlaydi

container.insertBefore(letters[2], letters[1]) // insertBefore - birinchi elementni ikkinchi elementni oldiga qo'yib beradi

// letters[1].replaceWith(letters[2]) // replaceWith - birinchi elementni o'chirib o'rniga ikkinchi elemnti qo'yadi
