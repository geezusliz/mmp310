var elem = document.createElement('h1');
elem.textContent = "Hello World.";
document.body.appendChild(elem);

const submitButton = document.getElementById("submit");
const nameInput = document.getElementById("name");



submitButton.onclick = function() { 
    console.log(nameInput.value);
    console.log("You Clicked me!");
    console.log(this);
    console.log(event);
};