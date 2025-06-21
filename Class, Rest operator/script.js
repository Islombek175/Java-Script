class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}

	greeting() {
		return `Full name: ${this.firstName} ${this.lastName}.`
	}
}

class statusPerson extends Person {
	constructor(firstName, lastName, isMarried){
		super(firstName, lastName)
		this.isMarried = isMarried
	}
	
	get() {
		return `Full name: ${this.firstName} ${this.lastName}. Married ${this.isMarried}.`
	}
}

firstPerson = new Person("Islombek", "Matkarimov")
secondPerson = new statusPerson("Mustafo", "Atoboyev", false)


// console.log(firstPerson.greeting());
// console.log(secondPerson.get());

function logger(a, b, ...rest_operatori) {
	console.log(a);
	console.log(b);	
	console.log(rest_operatori);
	
}

logger(1, 2, 5,5,5,55,6,66,6,6,)

