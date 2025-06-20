// Callback

function showHeloo(callback) {
	console.log('Hello!')

	callback()
}

function callback() {
	console.log("Are you ready?")
}

showHeloo(callback)

// 

// Destruktizatsiya

const person = {
	name: "Islombek",
	age: 16,
	job: null,
	hobbies: {
		sport: "Valleyball",
		games: "MLBB",
	},
	sayHello: function () {
		console.log(`Hello! ${this.name}`)
	}
}

const {
	name,
	job,
	age,
	hobbies: {sport, games},
	sayHello,

} = person

console.log(name)


console.log(Object.keys(person).length);
// for in - object uchun
// for of - array(massiv) uchun

for(let key in person) {
	console.log(`Property: ${key}; Value: ${person[key]}`);
	if(typeof person[key] === 'object') {
		for(let i in person[key]) {
			console.log(`Property ${i}; Value: ${person[key][i]}`)
		}
	}
}

