function myfunc() {

    var topDiv = document.createElement("div")
    topDiv.setAttribute("id","topDiv");
    document.body.appendChild(topDiv);

    var Heading = document.createElement("div");
    Heading.setAttribute("class", "Heading");
    topDiv.appendChild(Heading);
    var icon = document.createElement("div");
    icon.setAttribute("class", "icon");
    Heading.appendChild(icon);
    var img = document.createElement("img");
    img.setAttribute("src", "./EPAM_LOGO_White.png");
    img.setAttribute("class", "logo");
    img.setAttribute("alt", "image");
    icon.appendChild(img);
    var insideHeader = document.createElement("div");
    insideHeader.setAttribute("class", "insideHeader");
    insideHeader.innerHTML = "SEARCH YOUTUBE"
    Heading.appendChild(insideHeader);
    var searchDiv = document.createElement("div");
    searchDiv.setAttribute("class", "searchDiv");
    topDiv.appendChild(searchDiv);

    var searchBox = document.createElement("INPUT");
    searchBox.setAttribute("type", "text");
    searchBox.setAttribute("id", "searchBox");
    searchBox.setAttribute("class", "searchBox");
    searchBox.setAttribute("placeholder", "      Search Here...");
    searchDiv.appendChild(searchBox);

    var divEmpty = document.createElement("div");
    divEmpty.setAttribute("class", "divEmpty");
    searchDiv.appendChild(divEmpty);

    var searchButton = document.createElement("BUTTON");
    searchButton.innerHTML = "Search";

    searchButton.addEventListener('click', apiCall);
    searchButton.addEventListener("click", nextPrevButtonCall, { once: true, });
    searchButton.setAttribute("class", "searchButton");
    searchDiv.appendChild(searchButton);

    var superDiv = document.createElement("div");
    superDiv.setAttribute("class", "superDiv");
    superDiv.setAttribute("id", "superDiv");
    document.body.appendChild(superDiv);

    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "mainDiv");
    mainDiv.setAttribute("id", "mainDiv");
    superDiv.appendChild(mainDiv);
    

    var footer = document.createElement("footer");
    footer.setAttribute("class", "footer");
    footer.setAttribute("id", "footer");
    footer.innerHTML = "&copy VISHAL TULUGU";
    document.body.append(footer);
}