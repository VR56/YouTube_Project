function numberFieldChange() {
    const number = 4;
    let val = document.getElementById("pageNumber").value;
    pageCount = document.getElementById("pageNumber").value;
    let signOfVal = Math.sign(val);
    if (signOfVal == 1) {
        if (val > results.items.length / number) {
            endIndex = results.items.length;
            startIndex = endIndex - number;
            document.getElementById("pageNumber").value=results.items.length/number;
            displayCards(results, startIndex, endIndex);
        } else {
            endIndex = number * val;
            startIndex = endIndex - number;
            displayCards(results, startIndex, endIndex);
        }

    } else {
        alert("Enter a valid page Number");
        document.getElementById("pageNumber").value=1;
    }

}