function numberFieldChange() {
    let val = document.getElementById("pageNumber").value;
    pageCount = document.getElementById("pageNumber").value;
    let signOfVal = Math.sign(val);
    if (signOfVal == 1) {
        if (val > results.items.length / 4) {
            endIndex = results.items.length;
            startIndex = endIndex - 4;
            document.getElementById("pageNumber").value=results.items.length/4;
            displayCards(results, startIndex, endIndex);
        } else {
            endIndex = 4 * val;
            startIndex = endIndex - 4;
            displayCards(results, startIndex, endIndex);
        }

    } else {
        alert("Enter a valid page Number");
        document.getElementById("pageNumber").value=1;
    }

}