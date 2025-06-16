const now = new Date()

const year = new Date().getFullYear(),
	month = new Date().getMonth(),
	date = new Date().getDate(),
	day = new Date().getDay(),
	hour = new Date().getHours(),
	hourUTC = new Date().getUTCHours()
	second = new Date().getSeconds(),
	millisecond = new Date().getMilliseconds()

now.setHours(9) // set - o'zgartiradi
console.log(now);
