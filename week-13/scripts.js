// JSON data
const rectangles = [
	{
	  height: '0.62vw',
	  color: '#000000',
	},
	{
	  height: '1.49vw',
	  color: '#754400',
	},

	{
	  height: '1.8vw',
	  color: '#E46B00',
	},
	{
	  height: '2.58vw',
	  color: '#FD9B31',
	},
	{
	  height: '3.05vw',
	  color: '#FDD33C',
	},
	{
	  height: '3.75vw',
	  color: '#FEF6D1',
	},
	{
	  height: '4.54vw',
	  color: '#8DB4B6',
	},
	{
	  height: '5.39vw',
	  color: '#60F6EC',
	},
	{
	  height: '6.33vw',
	  color: '#00B6DD',
	},
	{
	  height: '6.97vw',
	  color: '#1F5BFE',
	},
	{
	  height: '10.38vw',
	  color: '#775496',
	},
	{
	  height: '19.45vw',
	  color: '#F115CC',
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
  