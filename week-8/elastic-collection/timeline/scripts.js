
// Fetch gets your JSON file…
fetch('collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection) // In reverse order
})

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
		const itemDate = document.createElement('h2') // Make an `h2`
		itemDate.innerHTML = item.date // Put the JSON title inside
		listItem.appendChild(itemDate) // And add it to the `li`!

		const itemTime = document.createElement('h5') // Make an `h2`
		itemTime.innerHTML = item.time // Put the JSON title inside
		listItem.appendChild(itemTime) // And add it to the `li`!

		const itemInfo =
			`
				<details>
					<summary class="info">More Info.</summary><br><br>
					<h3>${item.category}</h3><br>\
					<h6>${item.gender}</h6><br>
					<h4>${item.length}</h4>
				</details>

			`
		listItem.insertAdjacentHTML('beforeend', itemInfo) // Which can we then insert

		const itemImage = document.createElement('img') // And an image
		itemImage.src = item.image // Set the `src` attribute from the JSON
		listItem.appendChild(itemImage) // And add that too

 
		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
				<h4>${item.app}</h4>
				<details>
					<summary>Transcript</summary><br><br>
					<h5>${item.transcript}</h5>
				</details>

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