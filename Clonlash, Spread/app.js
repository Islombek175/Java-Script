let a = 10
let b = a 
// console.log(a, b)
// b = b + 10, console.log(a, b)

// Clonlash - ikkita ozgaruvchi, 1 ta qiymat
const person = {
	name: "Islombek",
	age: 16,
	hobbies: {
		game: "MLBB",
		sport: "Football",
	}
}

// let secondPerson = person
// console.log(person, secondPerson)


// 1. Intterratsiya

// const copyobj = obj => {
// 	const clone = {}

// 	for (let key in obj) {
// 		clone[key] = obj[key]
// 	}

// 	return clone
// }

// secondPerson = copyobj(person)
// secondPerson.name = "Sunnat"
// secondPerson.age = 16
// secondPerson.hobbies.game = "LOTR"

// console.log(person, secondPerson)


// 2.Object assign

// const secondPerson = Object.assign({isMarried: false}, person)
// secondPerson.name = "Sunnat"
// secondPerson.age = 16
// secondPerson.hobbies.game = "LOTR"

// console.log(person, secondPerson)


// 3.Spread operatori ES8

// const secondPerson = {...person}
// secondPerson.name = "Sunnat"
// secondPerson.age = 16
// secondPerson.hobbies.game = "LOTR"

// console.log(person, secondPerson)


const cars = ["BMW", "Audi", "Porsche"]

// 1. Slice method yordamida

// const clone = cars.slice()
// clone.push("Suzuki")
// console.log(cars, clone)


// 2. Spread operator yordamida ES8

// const copy = [...cars]
// copy.push("Subaru")
// console.log(cars, copy);


// 3.Function - Spread

// function log(a, b, c) {
// 	console.log("First arg:", a);
// 	console.log("Second arg:", b);
// 	console.log("Third arg:", c);
	
// }
// const arr = [4, 5, 6]

// log(... arr)
