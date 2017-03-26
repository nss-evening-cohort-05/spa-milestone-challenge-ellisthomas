
//////////// event listeners will go here

    



function clickedCard() {

    if (e.target.classList.contains("carCard")) {
        e.target.classList.add("clicked");
        selectedCard = e.target.childNodes[2];
console.log("hello");

    } else if (e.target.classList.contains("child")) {
        e.target.parentNode.classList.add("clicked");
        selectedCard = e.target.parentNode.childNodes[2];

    } else if (e.target.classList.contains("grandchild")) {
        e.target.parentNode.classList.add("clicked");
        selectedCard = e.target.parentNode.parentNode.childNodes[2];


    }

    inputField.focus();

};




    var inputText = document.getElementById("inputText");

    inputText.addEventlistener("keyup", function() {
        if (event.keyCode === 13) {
            inputText.value = "";
        } else if (selectedCard === undefined) {
            alert("Hello");
        } else {
            var editDescription = selecetedCard
            editDescription.innerHTML = inputText.value;
        }
    })
