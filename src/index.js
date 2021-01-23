import { getList } from './utils';
const log = console.log;

//fetching data internally
const url = '../API/api.json';
const ApiUrl = 'https://reqres.in/api/users';

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
	const response  = await fetch(ApiUrl);
	const jsonResponse = await response.json();
	log('users');
	log(getList(jsonResponse));
}

fetchingData();

