const friend = {
	status: "fale"
	}

// Promise - vada
// resolve - vada bajarildi 
// reject - bajarilmadi
// finally - bajarilsa ham / bajarilmasa ham

const request = new Promise((resolve, reject) => {
	if(friend.status === "success") {
		friend.time = "12:00"
		resolve(friend)
	} else {
		friend.otmazka = "Probka"
		reject()
	}
})

request
	.then(data => {
		data.place = "Humo arena"
		return data
	})
	.catch(error => {			
		console.log(error);
	})
	.finally(() => {
		console.log("Telefon qilib qo'ydi");
	})

const logger = (time) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve()
		}, time)
	})
}

logger(1000).then(() => console.log("1000 ms"))
logger(2000).then(() => console.log("2000 ms"))

Promise.all([logger(1000), logger(2000)]).then(() => {
	console.log("All promises was resolved")
})