function getPlayerName(name) {
    const getPlayerNameById = document.getElementById(name);
    const getPlayerName = getPlayerNameById.innerText;
    const orderedList = document.getElementById('ordered-list');
    let players = [orderedList.childNodes];
    console.log(players);


    if (players.length < 5) {
        const createLi = document.createElement('li');
        createLi.innerText = getPlayerName;
        orderedList.appendChild(createLi);
        // players.push(createLi.innerText);
    }

    else {
        return;
    }
}




