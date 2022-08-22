// targetting all the select button by their class name
let selectedListLength = 0;
const selectButtons = document.getElementsByClassName('select-btn');
for (const selectButton of selectButtons) {
    // adding event listener for each button
    selectButton.addEventListener('click', function (event) {
        const targetButton = event.target;
        const targetPlayerName = targetButton.parentNode.querySelector('h5').innerText;


        if (selectedListLength >= 5) {
            alert('You cannot add more than 5 players!'); //alert for more than 5 players
        }
        else {
            getPlayerName(targetPlayerName); //using this function from common.js file
            targetButton.disabled = true; //disabling button after clicking
            targetButton.classList.add('bg-secondary'); //changing color for disabled button
            // getting the length from player list(ol)
            selectedListLength = document.getElementById('selected-players').children.length;
        }

    })
}
