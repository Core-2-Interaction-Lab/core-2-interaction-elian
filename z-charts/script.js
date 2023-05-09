// FETCH DATA FROM THE WEB
const url = 'https://data.cityofnewyork.us/resource/ii3r-svjz.json?$query=SELECT%0A%20%20%60case_year%60%2C%0A%20%20%60incident_datetime%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60battalion%60%2C%0A%20%20%60community_district%60%2C%0A%20%20%60precinct%60%2C%0A%20%20%60incident_classification%60%2C%0A%20%20%60cause_fire_description%60%2C%0A%20%20%60fire_code_category%60%0AORDER%20BY%20%60incident_datetime%60%20DESC%20NULL%20LAST';

fetch(url)
  .then(response => response.json())
	// pass the data to the function!
	.then(data => playWithData(data))


// VISUALIZE THE DATASET
const playWithData = data => {

	console.log(data);
	// how many instances were QUAA-ING?
	const brooklyn = data.filter(item => item.brooklyn == true).length;
	const queens = data.filter(item => item.queens == true).length;
	const bronx = data.filter(item => item.bronx == true).length;
	const manhattan = data.filter(item => item.manhattan == true).length;
	const statenIsland = data.filter(item => item.statenIsland == true).length;
	
	const dataLabels = ['brooklyn', 'queens', 'bronx', 'manhattan', 'statenIsland'];
	const dataValues = [brooklyn, queens, bronx, manhattan, statenIsland];


	const ctx = document.getElementById('myChart');

	new Chart(ctx, {
	  type: 'bar',
	  data: {
		labels: ['brooklyn', 'queens', 'bronx', 'manhattan', 'statenIsland'],
		datasets: [
			{
				label: '# of Squirrels',
				data: [brooklyn, queens, bronx, manhattan, statenIsland],
				borderColor: '#4dc9f6',
				backgroundColor: ['rgb(255, 159, 64)','rgb(150, 150, 250)','rgb(255, 9, 0)','rgb(155, 9, 64)','rgb(60, 169, 64)','rgb(255,55, 64)','rgb(255, 159, 254)','rgb(200, 159, 104)'],
				borderWidth: 1
			}
		]
	  },
	  options: {
		scales: {
		  y: {
			beginAtZero: true
		  }
		}
	  }
	});

}