document.getElementById('calculate-btn').addEventListener('click', function () {
    const inputValuePerPlayer = document.getElementById('per-player-field');
    const inputValuePerPlayerString = inputValuePerPlayer.value;
    const inputPerPlayer = parseFloat(inputValuePerPlayerString);

    const selectedListLength = document.getElementById('selected-players').children.length;
    const costPerPlayer = inputPerPlayer * selectedListLength;

    const playerExpensesValue = document.getElementById('player-expenses');
    const playerExpenses = playerExpensesValue.innerText;

    playerExpensesValue.innerText = costPerPlayer;
})

