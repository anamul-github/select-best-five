

function getPlayerName(name) {
    const getPlayerNameById = document.getElementById(name);
    const getPlayerName = getPlayerNameById.innerText;
    const orderedList = document.getElementById('ordered-list');
    let test = [orderedList.childNodes];


    if (test.length < 5) {
        const createLi = document.createElement('li');
        createLi.innerText = getPlayerName;
        orderedList.appendChild(createLi);
        // test.push(createLi.innerText);
    }

    else {
        return;
    }
}


document.getElementById('first-btn').addEventListener('click', function () {
    getPlayerName('first-player');
});

