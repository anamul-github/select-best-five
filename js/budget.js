// adding event listener on calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {
    // first getting the input from per player field
    const inputValuePerPlayer = document.getElementById('per-player-field');
    const inputValuePerPlayerString = inputValuePerPlayer.value;
    const inputPerPlayer = parseFloat(inputValuePerPlayerString);

    // then calculating the cost depending on selected players
    const selectedListLength = document.getElementById('selected-players').children.length;
    const costPerPlayer = inputPerPlayer * selectedListLength;

    // setting the total player cost on player expenses element
    const playerExpensesElement = document.getElementById('player-expenses');
    const playerExpensesElementString = playerExpensesElement.innerText;
    const playerExpenses = parseFloat(playerExpensesElementString);

    playerExpensesElement.innerText = costPerPlayer;
})

// adding event listener on calculate total button
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    // getting the input from manager field
    const inputValueManager = document.getElementById('manager-field');
    const inputValueManagerString = inputValueManager.value;
    const inputManager = parseFloat(inputValueManagerString);

    // then getting the input from coach field
    const inputValueCoach = document.getElementById('coach-field');
    const inputValueCoachString = inputValueCoach.value;
    const inputCoach = parseFloat(inputValueCoachString);

    // getting the value from player expenses (reusing this code to make it work)
    const playerExpensesValue = document.getElementById('player-expenses');
    const playerExpensesValueString = playerExpensesValue.innerText;
    const playerExpenses = parseFloat(playerExpensesValueString);

    // calculating total cost
    const totalCostCalc = playerExpenses + inputManager + inputCoach;

    // setting total cost on Total element
    const totalCostElement = document.getElementById('total-cost');
    const totalCostElementString = totalCostElement.innerText;
    const totalCost = parseFloat(totalCostElementString);

    totalCostElement.innerText = totalCostCalc;
})