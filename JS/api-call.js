function apinextCall() {
    var url = `${api}${results.nextPageToken}&q=${searchText}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            results.items.push(...data.items);
            displayCards(results, startIndex, endIndex);
        })
        .catch(error => console.log("Error"))
}

function apiCall() {
    searchText = document.getElementById("searchBox").value;
    var url = `${api}CAoQAA&q=${searchText}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            results = data;
            displayCards(data, startIndex, endIndex);
        })
        .catch(error => console.log("Error"))
        document.getElementById("footer").style.bottom=0;
    }