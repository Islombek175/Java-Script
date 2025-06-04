const person = new Object({
	name: 'Islombek',
	age: 16,
	showHello: function () {
		console.log('Hello!')
	},
})

Object.prototype.greet = function () {
	console.log('Greet!')
}

// person ga greet degan __proto__ - prototip berildi
console.log(person)

const frm = Object.create(person)
// frm ga person prototip qilib tayinlandi
// frm->person->greet
console.log(frm)

frm.name = 'Sunnatillo'
console.log(frm)
