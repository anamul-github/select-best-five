function getPlayerName(name) {
    const getPlayerNameById = document.getElementById(name);
    const getPlayerName = getPlayerNameById.innerText;
    const orderedList = document.getElementById('ordered-list');

    if (orderedList.childElementCount < 5) {
        const createLi = document.createElement('li');
        createLi.innerText = getPlayerName;
        orderedList.appendChild(createLi);
    }

    else {
        return;
    }
}

/* function buttonDisable(event) {
    event.target.disabled = true;
    event.target.classList.add('bg-secondary');
} */

/* let buttonColor = document.querySelector('btn');
function disabledColor() {
    if (buttonColor.disabled == true) {
        buttonColor.style.backgroundColor = 'red'; */

// document.getElementById('first-btn').style.color = 'red';



/* document.getElementById('first-btn').addEventListener('click', function onClick(event) {
    event.target.style.backgroundColor = 'red';

})

onClick(); */
