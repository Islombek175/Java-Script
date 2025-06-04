const numberOfSeries = +prompt("Nechta seial ko'rdingiz?", "")

let actors = {}
let genres = []

let seriesDB = {
	count: numberOfSeries,
	series: {},
	actors: actors,
	genres: genres,
	private: false,
}
const watchedSeries = () => {
	for(let i = 0; i < 2; i ++ ){
		let a1 = prompt(`Ohirgi ko'rgan serialingiz? ${i+1}`, "");
		let a2 = +prompt(`Necha baxo berasiz? ${i+1}`, "");
	
		if(a1 != null && a2 != null && a1 != "" && a2 != ""){
		seriesDB.series[a1] = a2
		}
		else{
			i--
		}
	}
}

const audience = () => {
	if(seriesDB.count < 5){
		console.log("Kam serial ko'ripsiz");
	} else if( seriesDB.count >= 5 && seriesDB.count < 10){
		console.log("Siz classik tamoshabin ekansiz");
	} else if(count >= 10){
		console.log("Siz serialchi zvezda ekansiz");
	}
}

const writeGenres = () => {
	for(let i = 0; i < 3; i++){
		let genres = prompt(`Yaxshi ko’rgan janringiz ${i+1}`)
		seriesDB.genres[i] = genres
	}
}

const showDB = () => {
	if(seriesDB.private === false){
		console.log(seriesDB);
	} else if(seriesDB.private === true){
		console.log("Sorry, we can't show you seriesDB.");
	}
}

watchedSeries(), audience(), writeGenres(), showDB()