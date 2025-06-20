function Person(firstName, lastName) {
	this.firstName = firstName
	this.lastName = lastName
	this.hello = function () {
		console.log(`Hello, ${this.firstName} ${this.lastName}`);
	}
}

Person.prototype.convertAge = function(age) {
	console.log(`${this.firstName}'s age is ${age}`);
}

const newPerson = new Person("Islombek", "Matkarimov")
const secondPerson = new Person("Mustafo", "Ataboyev")

newPerson.convertAge(16)
secondPerson.convertAge(15)

console.log(newPerson, secondPerson);

