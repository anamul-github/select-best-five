document.getElementById('calculate-btn').addEventListener('click', function () {
    const inputValuePerPlayer = document.getElementById('per-player-field');
    const inputValuePerPlayerString = inputValuePerPlayer.value;
    const inputPerPlayer = parseFloat(inputValuePerPlayerString);

    const selectedListLength = document.getElementById('selected-players').children.length;
    const costPerPlayer = inputPerPlayer * selectedListLength;

    const playerExpensesValue = document.getElementById('player-expenses');
    const playerExpensesValueString = playerExpensesValue.innerText;
    const playerExpenses = parseFloat(playerExpensesValueString);

    playerExpensesValue.innerText = costPerPlayer;
})

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const inputValueManager = document.getElementById('manager-field');
    const inputValueManagerString = inputValueManager.value;
    const inputManager = parseFloat(inputValueManagerString);

    const inputValueCoach = document.getElementById('coach-field');
    const inputValueCoachString = inputValueCoach.value;
    const inputCoach = parseFloat(inputValueCoachString);

    const playerExpensesValue = document.getElementById('player-expenses');
    const playerExpensesValueString = playerExpensesValue.innerText;
    const playerExpenses = parseFloat(playerExpensesValueString);


    const totalCostCalc = playerExpenses + inputManager + inputCoach;

    const totalCostValue = document.getElementById('total-cost');
    const totalCostValueString = totalCostValue.innerText;
    const totalCost = parseFloat(totalCostValueString);

    totalCostValue.innerText = totalCostCalc;
})