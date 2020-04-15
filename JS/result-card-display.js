function displayCards(data, start, end) {
    const items = data["items"];
    const place = document.querySelector('.mainDiv');
    while (place.firstChild) place.removeChild(place.firstChild);
    for (let i = start; i < end; i++) {
        card(items,i);
    }

}