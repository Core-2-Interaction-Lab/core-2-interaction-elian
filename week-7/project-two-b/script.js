const createCollectionHTML = data => {
    const collectionGrid = document.getElementById('collection');

    data.forEach(item => {
        console.log(item);
    })
}

fetch('collection.json')
    .then(response => response.json())
    .then(data => {
        createCollectionHTML(data);
    })