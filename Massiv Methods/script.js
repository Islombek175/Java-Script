const colors = ["red", "green", "blue", "yellow", "black"]

console.log(`Massiv uzunligi: ${colors.length}`)
console.log(`Massivdagi elementni chaqirish: ${colors[1]}`)
console.log(`Ohirgi elementni o'chirish: ${colors.pop()}`)
console.log(`Ohirga element qo'shish: ${colors.push("white")}`)
console.log(`Oldingi elementni o'chirish: ${colors.shift()}`)
console.log(`Oldiga elementni qo'shish: ${colors.unshift("brown")}`)

// Pop - Massivdagi ohirgi elemetni o'chiradi
// Push - Massivni ohiriga element qo'shadi

// Shift - Massivni oldidagi elementni o'chiradi
// Unshift - Massivni oldiga element qo'shadi

console.log(colors)

const cars = ["BMW", "Audi", "Suzuki", "Porsche"]

// Sort - Alfavit boyicha massivni sort qiladi

cars.sort()
console.log(cars)

for(let car of cars) {
	console.log(`car: ${car}`)
}

cars.forEach(item=> {
	console.log(`item: ${item}`);
	
})

// Split - stringni massiv qilib ajratish

const socialMedia = "Youtube, Telegram, Instagram"
let arr = socialMedia.split(", ")
console.log(arr)

// Join - Massivdagi elementlarni orasiga "**" qoshib string qilib chiqaradi

console.log(arr.join("- "))