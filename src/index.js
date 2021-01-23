import { getList } from './utils';
import './style.scss';
const log = console.log;

//fetching data internally
const url = './API/api.json';
const ApiUrl = 'https://reqres.in/api/sers';
const dataUrl = '../API/data.csv';

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
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)'
				],
				borderWidth: 1
			}]
		}
	}
)}

chartAllOfIt();

async function fetchingData() {
	const response = await fetch(dataUrl)
	const jsonResponse = await response.text();
	
	const dataToArray = jsonResponse.split('\n');
	const years = [];
	const temp = [];
	for(var i = 0; i < dataToArray.length; i++) {
		const splittinLines = dataToArray[i].split(',');
		splittinLines.forEach((cur, ind) => {
			if(ind == 0) {
				years.push(cur);
			} else if(ind == 1) {
				temp.push(parseFloat(cur) + 14);
			}
		})
	}
	log(years)
	return [years, temp];
}





