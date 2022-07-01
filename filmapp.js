"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true
};
function rememberMyFilms () {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Ո՞րն ֆիլմն եք վերջերս դիտել", "");
		const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");
	
		if (a != null && b != null && a.trim() != "" && b.trim() != "" && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log("DONE");
		} else {
			console.log("ERROR");
			i--;
		}
	}
}

rememberMyFilms();

function detectUserPersonalLevel () {
	if (numberOfFilms < 10) {
		console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
	} else if (numberOfFilms < 30) {
		console.log("Դուք ֆիլմի սիրահար եք");
	} else if (numberOfFilms >= 30) {
		console.log("Դուք Կինոման եք !!!");
	}
}

detectUserPersonalLevel();

function showMyDB () {
	return personalMovieDB.privat === true?
		 console.log(personalMovieDB) :
		 console.log ("Տվյալների բազան փակ է։");
}

showMyDB();

function yourFavoriteGenres() {
	for (let i = 0; i <= 2; i++) {
		const genres = prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`);

		if (genres.trim() != "" && genres != null && genres.length <= 20) {
			personalMovieDB.genres[i] = genres;
		} else {
			i--;
		}
	}
}

yourFavoriteGenres();



/*
"use strict";

let numberOfFilms;
while ( isNaN(numberOfFilms) ) {
  numberOfFilms = +prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "");
}

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	showMyDB(){
		return personalMovieDB.privat === true?
		 console.log(personalMovieDB) :
		 console.log ("Տվյալների բազան փակ է։");	
	},
	yourFavoriteGenres(){
		for (let i = 0; i < 3; i++) {
			const answer = prompt(`${i+1}. Ձեր նախընտրելի ժանրը`, );
			if (answer !== null  && answer !=="" && answer.length <= 20) {
				personalMovieDB.genres[i] = answer;
				console.log("OK");
			} else {
				console.log("ERROR");
				i--;
			}  //3 
	} 
}
}; 

personalMovieDB.showMyDB();// 1
personalMovieDB.yourFavoriteGenres(); //2
		
if (numberOfFilms < 10) {
	console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
} else if (numberOfFilms < 30) {
	console.log("Դուք ֆիլմի սիրահար եք");
} else if (numberOfFilms >= 30) {
	console.log("Դուք Կինոման եք !!!");
}

for (let i = 0; i < 2; i++) {
	const a = prompt("Ո՞րն ֆիլմն եք վերջերս դիտել", "");
	const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");

	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log("OK");
	} else {
		console.log("ERROR");
		i--;
	}
}

 


*/