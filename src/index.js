import { getList, fetchingData, log } from './utils';
import './style.scss';

//fetching data internally
const url = './API/api.json';
const ApiUrl = 'https://reqres.in/api/sers';

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

async function chartAllOfIt() {
	var ctx = document.getElementById('myChart').getContext('2d');
	const [years, temperature] = await fetchingData();
	
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: years,
			datasets: [{
				label: 'my csv datas',
				data: temperature,
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderWidth: 1
			}]
		}
	}
)}

//chartAllOfIt();

if('geolocation' in navigator) {
	let options = {
		enableHighAccuracy: false,
		timeout: 1000 * 5,
		maximumAge: 1000 * 60 * 7
	}
	
	navigator.geolocation.getCurrentPosition(posSuccess, posFail, options);
	
} else {
	log('geolocation is not working in this browser');
}

function posSuccess(position) {
	log(`longitude: ${position.coords.longitude}`);
	log(`latitude: ${position.coords.latitude}`);
}

function posFail(err) {
	if(err) {
		log('Some error happened when trying to take position');
	}
}





