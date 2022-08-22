let selectedListLength = 0;
const selectButtons = document.getElementsByClassName('select-btn');
for (const selectButton of selectButtons) {
    selectButton.addEventListener('click', function (event) {
        const targetButton = event.target;
        const targetPlayerName = targetButton.parentNode.querySelector('h5').innerText;

        if (selectedListLength >= 5) {
            alert('limit reached!');
        }
        else {
            getPlayerName(targetPlayerName);
            targetButton.disabled = true;
            targetButton.classList.add('bg-secondary');
            // counter += 1;
            // setElementById("select-counter", selectedListLength);
            selectedListLength = document.getElementById('selected-players').children.length;
        }

    })
}
