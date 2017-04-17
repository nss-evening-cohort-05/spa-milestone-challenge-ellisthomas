////////// event listeners will go here

selectedCard = document.getElementsByClassName("carCard");
var userOutput = document.getElementById("userOutput");
var inputText = document.getElementById("inputText");
var selectedDescription;
var clickedCard;

window.addEventListener("click", function(e) {
    for (var k = 0; k < selectedCard.length; k++) {
        selectedCard[k].classList.remove("add-border", "add-background");


        for (var j = 0; j < selectedCard.length; j++) {
            selectedCard[j].classList.value = "carCard";
        }
        if (e.target.classList.value === "carCard") {
            e.target.classList.add("add-border", "add-background");
        } else if (e.target.parentNode.classList.value === "carCard") {
            e.target.parentNode.classList.add("add-border", "add-background");

        }

    }

    inputText.focus();
});

inputText.addEventListener("keypress", function(e) {
    var selectedCard = document.getElementsByClassName("add-border");
    var editDescription = selectedCard[0].children[5];
    editDescription.innerHTML = "";

    var copyText = inputText.value;
    editDescription.innerHTML += copyText;

});


window.addEventListener("keyup", function(e) {
    if (event.keyCode === 13) {
        inputText.value = "";
        return false;
    }
});



console.log("selectedCard", selectedCard)


