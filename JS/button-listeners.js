function prevButtonListener() {
    if (startIndex !== 0) {
        startIndex -= 4;
        endIndex -= 4;
        displayCards(results, startIndex, endIndex);
        pageCount--;
        document.getElementById("pageNumber").value = pageCount;
    } else {
        alert("Your in the first page");
    }
}

function nextButtonListener() {
const totalPages = document.getElementById("totalPages");
    if (endIndex === results.items.length) {
        apinextCall();
        startIndex += 4;
        endIndex += 4;
        totalPages.value=` / ${results.items.length/4 + 4}`;
    } else {
        startIndex += 4;
        endIndex += 4;
        displayCards(results, startIndex, endIndex);
    }
    pageCount++;
    document.getElementById("pageNumber").value = pageCount;
}