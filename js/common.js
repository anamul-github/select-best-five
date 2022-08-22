// this is a common function to get specific players and add them in ordered list
function getPlayerName(targetPlayerName) {
    const orderedList = document.getElementById('selected-players');
    const newLi = document.createElement('li');
    newLi.innerText = targetPlayerName;
    orderedList.appendChild(newLi);
}

