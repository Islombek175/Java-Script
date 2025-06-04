// String methods

let text = 'Hello World'
const password = '        dawdwa         '

// Lenght is property
console.log('Uzunligi:', text.length)

// Methods
console.log('#1. Aniq positsiyadagi indexdagi xarf:', text.charAt(2))
console.log('#2. Aniq positsiyadagi indexdagi xarf:', text[1])
console.log('Xarflarni kotta registerda qilish:', text.toUpperCase())
console.log('Xarflarni kichik registerda qilish:', text.toLowerCase())
console.log('#1. Matni bosh va oxiridan kesish:', text.slice(0, -4))
console.log('#2. Matni bosh va oxiridan kesish:', text.substring(0, 2))
console.log("Ikki tarafdan bo'sh space olib tashlash", password.trim())
console.log('Boshidan space olib tashlash', password.trimStart())
console.log('Oxiridan space olib tashlash', password.trimEnd())

console.log(text)

// Number methods

const number = 12.6
const width = '240.42px'

console.log('Eng yaqin sonni oladi:', Math.round(number))
console.log('Sonnu butun qilib beradi:', Math.floor(number))
console.log(
	"String ma'lumot turidan butun sonni qaytarib beradi:",
	parseInt(width)
)
console.log("String ma'lumot turidan son qilib beradi", parseFloat(width))

console.log(number)
