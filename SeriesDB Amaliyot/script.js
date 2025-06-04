let actors = {}
let genres = []

let seriesDB = {
	count: 0,
	series: {},
	actors: actors,
	genres: genres,
	private: false,
	start: function () {
		seriesDB.count = +prompt("Nechta serial ko'rdingiz?", '')

		while (
			seriesDB.count == '' ||
			seriesDB.count == null ||
			isNaN(seriesDB.count)
		) {
			seriesDB.count = +prompt("Nechta serial ko'rdingiz?", '')
		}
	},
	setSeries: function () {
		for (let i = 0; i < 2; i++) {
			let a1 = prompt(`Ohirgi ko'rgan serialingiz? ${i + 1}`, '')
			let a2 = +prompt(`Necha baxo berasiz? ${i + 1}`, '')
			
			if (a1 != null && a2 != null && a1 != '' && a2 != '') {
				seriesDB.series[a1] = a2
			} else {
				i--
			}
		}
	},
	detectingLevel: function () {
		if (seriesDB.count < 5) {
			console.log("Kam serial ko'ripsiz")
		} else if (seriesDB.count >= 5 && seriesDB.count < 10) {
			console.log('Siz classik tamoshabin ekansiz')
		} else if (count >= 10) {
			console.log('Siz serialchi zvezda ekansiz')
		}
	},
	visibleDB: function () {
		if (seriesDB.private == true) {
			seriesDB.private = false
		} else {
			seriesDB.private = true
		}
	},
	writeGenres: function () {
		confirm('')
	},
	showDb: function () {
		if (seriesDB.private == true) {
			console.log(seriesDB)
		} else if (seriesDB.private == false) {
			console.log("Ma'lumot mahfiy saqlanmoqda")
		}
	},
	writeGenres: function () {
		for (let i = 0; i < 3; i++) {
			let genres = prompt(`Yaxshi ko’rgan janringiz ${i + 1}`)
			if (genres == "" || genres == null) {
			i--
			} else {
				seriesDB.genres[i] = genres
			}
		}
		seriesDB.genres.forEach(item => {
			console.log(item);
		})
	},
}

const movie = Object.create(seriesDB)

console.log(movie.setSeries());

