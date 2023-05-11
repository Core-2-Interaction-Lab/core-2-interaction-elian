// JSON data
const rectangles = [
	{
	  cause: 'Electrical Devices',
	  number: '7',
	  height: '0.62vw',
	  color: '#000000',
	},
	{
	  cause: 'Heater',
	  number: '27',
	  height: '1.49vw',
	  color: '#754400',
	},

	{
	  cause: 'Natural Sources',
	  number: '30',
	  height: '1.8vw',
	  color: '#E46B00',
	},
	{
	  cause: 'Ignitable',
	  number: '31',
	  height: '2.58vw',
	  color: '#FD9B31',
	},
	{
	  cause: 'Motor',
	  number: '53',
	  height: '3.05vw',
	  color: '#FDD33C',
	},
	{
	  cause: 'Appliances',
	  number: '70',
	  height: '3.75vw',
	  color: '#FEF6D1',
	},
	{
	  cause: 'Hot Objects',
	  number: '107',
	  height: '4.54vw',
	  color: '#8DB4B6',
	},
	{
	  cause: 'Open Flame',
	  number: '126',
	  height: '5.39vw',
	  color: '#60F6EC',
	},
	{
	  cause: 'Cooking',
	  number: '148',
	  height: '6.33vw',
	  color: '#00B6DD',
	},
	{
	  cause: 'No Fire',
	  number: '163',
	  height: '6.97vw',
	  color: '#1F5BFE',
	},
	{
	  cause: 'Smoking',
	  number: '243',
	  height: '10.38vw',
	  color: '#775496',
	},
	{
	  cause: 'Electrical',
	  number: '618',
	  height: '19.45vw',
	  color: '#F115CC',
	},
	{
	  cause: 'Incendiary',
	  number: '930',
	  height: '26.41328125vw',
	  color: '#6200B9',
	},

  ];
  
  // Get the container element
  const container = document.getElementById('rectangles-container');
  
  // Loop through the rectangles data and create DOM elements for each one
  for (let i = 0; i < rectangles.length; i++) {
	const rectangle = rectangles[i];
  
	// Create the rectangle element
	const div = document.createElement('div');
	div.classList.add('rectangle');
	div.style.backgroundColor = rectangle.color;
	div.style.height = rectangle.height;
  
	// Append the rectangle elements to the container
	container.appendChild(div);
  }
  