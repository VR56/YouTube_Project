function nextPrevButtonCall() {
    var superDiv = document.getElementById("superDiv");
    var bottomDiv = document.createElement("div");
    bottomDiv.setAttribute("class", "bottomDiv");
    superDiv.appendChild(bottomDiv);

    var prevButton = document.createElement("BUTTON");
    prevButton.innerHTML = "Previous";
    prevButton.setAttribute("id", "prevButton");
    prevButton.setAttribute("class", "prevButton");
    bottomDiv.appendChild(prevButton);
    prevButton.onclick = function() {
        prevButtonListener();
    };

    var pageNumberDiv = document.createElement("div");
    bottomDiv.appendChild(pageNumberDiv);

    var pageNumber = document.createElement("input");
    pageNumber.setAttribute("type", "number");
    pageNumber.setAttribute("id", "pageNumber");
    pageNumberDiv.appendChild(pageNumber);
    pageNumber.value = pageCount;
    pageNumber.addEventListener("change", numberFieldChange);

    var totalPages= document.createElement("input");
    totalPages.setAttribute("type","text");
    totalPages.setAttribute("id","totalPages");
    pageNumberDiv.appendChild(totalPages);
    totalPages.value = ` / 4`;
    totalPages.disabled=true;

    var nextButton = document.createElement("BUTTON");
    nextButton.innerHTML = "Next";
    nextButton.setAttribute("class", "nextButton");
    bottomDiv.appendChild(nextButton);
    nextButton.addEventListener("click", nextButtonListener);

}