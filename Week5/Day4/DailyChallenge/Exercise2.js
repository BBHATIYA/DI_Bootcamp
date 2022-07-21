// 2nd Challenge
// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()

// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242

//DailyChallenge


const btn = document.getElementById("btn");
btn.addEventListener("click", fetchSunrise);

async function fetchSunrise(){
	const latitudeParis = 48.864716;
	const longitudeParis = 2.349014;
	const latitudeNY = 40.730610;
	const longitudeNY = -73.935242;
	
	try {
		const urlParis = `https://api.sunrise-sunset.org/json?lat=${latitudeParis}&lng=${longitudeParis}&date=today`;
		const urlNY = `https://api.sunrise-sunset.org/json?lat=${latitudeNY}&lng=${longitudeNY}&date=today`;
		const [resultsParis, resultNY] = await Promise.all([fetch(urlParis), fetch(urlNY)]);
		
		if (resultsParis.status !== 200 && resultNY.status !== 200) {
			throw new Error ("Error in status")
		} else {
			const allresults = await Promise.all([resultsParis.json(), resultNY.json()]);
			displayData(allresults)
		}

	} catch(error){
		console.log(error.message)
	}
}


function displayData (results) {
	results.forEach((elem, i)=> {
		const {results:{sunrise}} = elem
		const p = document.createElement("p");
		const text = document.createTextNode(`The sunrise in the #${++i} city is ${sunrise}`)
		p.appendChild(text);
		document.body.appendChild(p)
	})
}