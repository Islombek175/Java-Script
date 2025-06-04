let btn1 = document.querySelector('#btn-1')
let btn2 = document.querySelector('#btn-2')
let btn = document.querySelector('#btn')
let box = document.querySelector(".box")
let link = document.querySelector("a")


btn1.addEventListener("click", event => {
	console.log(event.currentTarget);
})
box.addEventListener("click", event => {
	console.log(event.currentTarget);
	
})

link.addEventListener("click", event => {
	event.preventDefault()	// preventDefault - eventlarni default qiladi(link ko'chirish olib tashlaydi)
	console.log("Link o'zgartirilgan");
	
})


// btn1.addEventListener('click', function () {
// 	//	click - onclick, qilganimizda function() ishga tushadi - log(1)
// 	console.log(1)
// })
// btn2.addEventListener('dblclick', function () {
// 	// dblclick - ondblclick(2x click), qilganimizda function() ishga tushadi - log(2)
// 	console.log(2)
// })




// const callaback = (event, text) => {
// 	console.log(event.target)
// 	console.log('Hovered')
// 	event.target.textContent = text
// }

// btn.addEventListener('mouseenter', e => callaback(e, "Hello student!")	)

count = 0
const deleteElement = event => {
	count ++
	console.log(count);
	if(count == 4){
		btn.removeEventListener("click", deleteElement)
	}
}

btn.addEventListener("click", deleteElement)
