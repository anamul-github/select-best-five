function getPlayerName(targetPlayerName) {
    const orderedList = document.getElementById('selected-players');
    const newLi = document.createElement('li');
    newLi.innerText = targetPlayerName;
    orderedList.appendChild(newLi);
}

