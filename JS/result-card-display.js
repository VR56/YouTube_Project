function displayCards(data, start, end) {
    let items = data["items"];
    let place = document.querySelector('.mainDiv');
    while (place.firstChild) place.removeChild(place.firstChild);
    console.log("yesss");
    for (let i = start; i < end; i++) {
        card(items,i);
        // console.log(items[i]["snippet"]["thumbnails"]["high"]["url"]);
    }

}