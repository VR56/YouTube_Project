function nextPrevButtonCall() {
    const superDiv = document.getElementById("superDiv");
    const bottomDiv = document.createElement("div");
    bottomDiv.setAttribute("class", "bottomDiv");
    superDiv.appendChild(bottomDiv);

    const prevButton = document.createElement("BUTTON");
    prevButton.innerHTML = "Previous";
    prevButton.setAttribute("id", "prevButton");
    prevButton.setAttribute("class", "prevButton");
    bottomDiv.appendChild(prevButton);
    prevButton.onclick = function() {
        prevButtonListener();
    };

    const pageNumberDiv = document.createElement("div");
    bottomDiv.appendChild(pageNumberDiv);

    const pageNumber = document.createElement("input");
    pageNumber.setAttribute("type", "number");
    pageNumber.setAttribute("id", "pageNumber");
    pageNumberDiv.appendChild(pageNumber);
    pageNumber.value = pageCount;
    pageNumber.addEventListener("change", numberFieldChange);

    const totalPages= document.createElement("input");
    totalPages.setAttribute("type","text");
    totalPages.setAttribute("id","totalPages");
    pageNumberDiv.appendChild(totalPages);
    totalPages.value = ` / 4`;
    totalPages.disabled=true;

    const nextButton = document.createElement("BUTTON");
    nextButton.innerHTML = "Next";
    nextButton.setAttribute("class", "nextButton");
    bottomDiv.appendChild(nextButton);
    nextButton.addEventListener("click", nextButtonListener);

}