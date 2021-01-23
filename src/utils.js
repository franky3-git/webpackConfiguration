export const log = console.log;
const dataUrl = '../API/data.csv';

export function getList(list) {
	return list;
}

export async function fetchingData() {
	const response = await fetch(dataUrl)
	const jsonResponse = await response.text();
	//log(jsonResponse)
	const dataToArray = jsonResponse.split('\n').slice(1);
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