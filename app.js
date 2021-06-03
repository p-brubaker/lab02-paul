// HTML setup
// Grab the dom elements (the input box and the button) in
// Add an event lestener to the button
// Get access to the user's input
// Use the user's input to "do domething"
// Display the result to the user

const boop = document.getElementById('submit-btn');
const inputField = document.getElementById('input-field');
const nameArea = document.getElementById('name-area');

const colorButton = document.getElementById('submit-color');
const colorInput = document.getElementById('color-field'); 
const topSection = document.getElementById('top-section');
const bottomSection = document.getElementById('bottom-section');

const pronounsButton = document.getElementById('pronouns-submit');
const pronounsInput = document.getElementById('pronouns-field');

const changeFontBtn = document.getElementById('change-font-btn');

const indecisivenessIndex = document.getElementById('indecision');

boop.addEventListener('click', () => {
    nameArea.textContent = inputField.value;
    indecisivenessIndex.innerHTML = parseInt(indecisivenessIndex.innerHTML) + 1;
});

colorButton.addEventListener('click', () => {
    topSection.style.backgroundColor = colorInput.value;
    bottomSection.style.backgroundColor = colorInput.value;
});

pronounsButton.addEventListener('click', () => {
    nameArea.textContent += '(' + pronounsInput.value + ')';
})

changeFontBtn.addEventListener('click', () => {
    nameArea.style.fontFamily = "Comic Sans MS", "Comic Sans", "Comic Neue";
    nameArea.style.color = 'blue';
})





