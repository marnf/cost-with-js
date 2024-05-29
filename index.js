document.getElementById('calculate-btn-id').addEventListener('click', function () {

    const mainIncome = document.getElementById('income-input-field');
    const incomeString = mainIncome.value;
    const incomeNumber = parseFloat(incomeString);


    const foodCost = document.getElementById('food-input-field');
    const foodCostValue = foodCost.value;
    const foodCostNumber = parseFloat(foodCostValue)


    const rantCost = document.getElementById('rent-input-field');
    const rantCostValueString = rantCost.value;
    const rantCostValueNumber = parseFloat(rantCostValueString);



    const clothesCost = document.getElementById('clothes-input-field');
    const clothesCostValueString = clothesCost.value;
    const clothesCostValueNumber = parseFloat(clothesCostValueString)

    //  three cost s


    const allCosts = foodCostNumber + rantCostValueNumber + clothesCostValueNumber;
    //  baki thake

    const funding = incomeNumber - allCosts;
    console.log(funding)

    if (isNaN(incomeNumber) || isNaN(foodCostNumber) || isNaN(rantCostValueNumber) || isNaN(clothesCostValueNumber) || clothesCostValueNumber > incomeNumber || rantCostValueNumber > incomeNumber || foodCostNumber > incomeNumber || allCosts > incomeNumber) {
        if (isNaN(incomeNumber)) {
            alert('age main balance lekho')
        }
        else if (isNaN(foodCostNumber) && isNaN(incomeNumber) && isNaN(rantCostValueNumber)) {
            alert('vai sobgula age puron kor')
        }
        else if (isNaN(foodCostNumber)) {
            alert('hawa khaya baica asila nki')
        }
        else if (isNaN(rantCostValueNumber)) {
            alert('asmane asila')
        }
        else if (isNaN(clothesCostValueNumber)) {
            alert('jamakapor kina naw age')
        }
        else if (clothesCostValueNumber > incomeNumber || rantCostValueNumber > incomeNumber || foodCostNumber > incomeNumber || allCosts > incomeNumber) {
            alert('you have not enough balance')
        }

        else {
            alert('sobgula puron koro')
        }

    }
    else {
        setTheValue('total-expenses-display', allCosts);
        setTheValue('balance-display', funding);
    }

})


document.getElementById('save-btn').addEventListener('click', function () {

    const savingInputField = document.getElementById('saving-parsent-input-field');
    const savingString = savingInputField.value;
    const savingNumber = parseFloat(savingString);

    const previousBalance = document.getElementById('balance-display');
    const previousBalanceNumber = previousBalance.innerText;


    const savingAmount = ((savingNumber * previousBalanceNumber) / 100);


    const lastBalance = previousBalanceNumber - savingAmount

    setTheValue('saving-amount-display', savingAmount);



    setTheValue('remaining-balance-display', lastBalance)




    if (isNaN(savingNumber)) {
        alert('vai koto parsent save korbi')
    }
    else if (savingNumber >= 100) {
        alert('100 er moddhe dekh halar put')
    }
    else {
        setTheValue('saving-amount-display', savingAmount);



        setTheValue('remaining-balance-display', lastBalance)

    }






})


