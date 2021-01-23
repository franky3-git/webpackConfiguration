const log = console.log;

//fetching data internally
const url = '../API/api.json';

//then catch syntax
/*fetch(url)
.then(response => response.json())
.then(jsonResponse => {
	log('this is the data fetched');
	log(jsonResponse);
})
.catch(err => {
	log('ERROR: ' + err);
})*/


//async await syntax
async function fetchingData() {
	const response  = await fetch(url);
	const jsonResponse = await response.json();
	log('this is the data fetched');
	log(jsonResponse);
}

fetchingData();

