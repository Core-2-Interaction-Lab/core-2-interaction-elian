// Function to render your items
const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')


	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`


		// You can make each element inside of that…
		const itemTitle = document.createElement('h2') // Make an `h2`
		itemTitle.innerHTML = item.pageTitle // Put the JSON title inside
		listItem.appendChild(item.pageTitle) // And add it to the `li`!

		const itemImage = document.createElement('img') // And an image
		itemImage.src = item.imageURL // Set the `src` attribute from the JSON
		listItem.appendChild(itemImage) // And add that too


		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
				<p>${item.caption}</p>
                <p>${item.idNum}</p>
                <p>${item.addedBy}</p>
				<a href="${item.pageURL}">
					<p>${item.pageURL}</p>
				</a>
                <p>Last edit at time of access: <p>${item.edit}</p></p>
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert


		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}



// Fetch gets your JSON file…
fetch('week-7/wiki-reader/collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})
