// function showThis() {
// 	console.log(this);
// }

// showThis()

// const person = {
// 	firstName: "Islombek",
// 	lastName: "Matkarimov",
// 	age: 16,
// 	greeting: function() {
// 		// console.log(this.firstName);
// 		const showThis = () => {
// 			console.log(this);
// 		}
// 		showThis()
// 		console.log(this);
		
// 	}
// }

// person.greeting()

// function Person(firstName, lastName) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.greeting = function () {
// 		console.log(`Hello ${firstName}`);
// 	}
// }

// const firstPerson = new Person("Islomebek", "Matkarimov")

// firstPerson.greeting()

// function greeting() {
// 	console.log(this.name);
// }

// const person = {
// 	name: "Islombek"
// }

// greeting.call(person)
// greeting.apply(person)

function calc(number) {
	return this*number
}

const double = calc.blind(2)
const trouble = calc.blind(3)

console.log(double(12));
console.log(double(24));

console.log(trouble(15));
console.log(trouble(30));


// 1. Context this oddiy function da window ga osiladi(ссылается) 
// 2. Context objectlardagi method - objectga teng
// 		Arrow functiondagi context this - uni yuqoridagi contextga osilib oladi
// 3. Context this function constructorni ichida - yangi object example lar
// 4. Call, apply, bind methodlar bu functionga context bog'lash