const box = document.querySelector(".box"),
	btn = document.querySelector("#btn")
	//width = box.clientWidth,	// foydalanuvchiga ko'rinadigan width
	//height = box.clientHeight 	// foydalanuvchiga ko'rinadigan height
	//width = box.offsetWidth, 	// umumiy width(scroll bilan)
	//height = box.offsetHeight 	// umumiy height(pasgi scroll bilan)
	width = box.scrollWidth, 	// elementning to'liq width(scrollsiz)
	height = box.scrollHeight, 	// elementning to'liq height(scrollsiz) 

btn.addEventListener("click", () => {
	box.style.height = height + "px";
})
console.log(width, height);

