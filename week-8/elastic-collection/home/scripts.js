// Function to render your items
const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')

	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`

		const itemID = document.createElement('h1') // Make an `h2`
		itemID.innerHTML = item.id // Put the JSON title inside
		listItem.appendChild(itemID) // And add it to the `li`!

		// You can make each element inside of that…
		const itemTitle = document.createElement('h2') // Make an `h2`
		itemTitle.innerHTML = item.title // Put the JSON title inside
		listItem.appendChild(itemTitle) // And add it to the `li`!

		const itemURL = document.createElement('h3') // Make an `h2`
		itemURL.innerHTML = item.URL // Put the JSON title inside
		listItem.appendChild(itemURL) // And add it to the `li`!

		const itemInstructions = document.createElement('p') // Make an `h2`
		itemInstructions.innerHTML = item.instructions // Put the JSON title inside
		listItem.appendChild(itemInstructions) // And add it to the `li`!

		const itemCategory = document.createElement('h6') // Make an `h2`
		itemCategory.innerHTML = item.category // Put the JSON title inside
		listItem.appendChild(itemCategory) // And add it to the `li`!

		const itemImage = document.createElement('img') // And an image
		itemImage.src = item.image // Set the `src` attribute from the JSON
		listItem.appendChild(itemImage) // And add that too

 
		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
				<h4>${item.caption}</h4>
				<details>
					<summary>More Info.</summary><br><br>
					<h5>Found from: ${item.from}</h5>
					<h5 class="url">${item.fromURL}</h5><br>
					<h5>Led to: ${item.to}</h5>
					<h5 class="url">${item.toURL}</h5><br>
				</details>
				<h6 class="edit">Last edit at time of access: ${item.edit}</h6>
				<h6 class="name">Found by: ${item.name}</h6><br><br><br>

			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		// You can build logic from your data, too
		// if (!item.otherAttr) { // If this is `false`
		// 	listItem.classList.add() // Add this class to the whole `li`
		// }

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}


// Fetch gets your JSON file…
fetch('collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection) // In reverse order
})