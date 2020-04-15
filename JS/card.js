function card(items,i) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    let image = document.createElement("img");
    image.setAttribute("class", "thumbnail");
    image.setAttribute("src", items[i]["snippet"]["thumbnails"]["high"]["url"]);
    image.setAttribute("alt", "image");
    let span = document.createElement("span");
    span.setAttribute("class", "title");
    span.innerHTML = items[i]["snippet"]["title"];
    let para = document.createElement("p");
    para.setAttribute("class", "description");
    para.innerHTML = items[i]["snippet"]["description"];

    card.appendChild(image);
    card.appendChild(span);
    card.appendChild(para);

    const place = document.querySelector('.mainDiv');
    place.appendChild(card);
}