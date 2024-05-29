function findOutTheValue(inputId) {
    const mainCost = document.getElementById(inputId);
    const mainCostValueString = mainCost.value;
    const mainCostValueNumber = parseFloat(mainCostValueString)

    return mainCostValueNumber
}

function setTheValue(elementId, setValue) {

    const takeTheElement = document.getElementById(elementId);
    takeTheElement.innerText = setValue;
}