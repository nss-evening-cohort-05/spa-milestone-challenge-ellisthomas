////////// event listeners will go here

selectedCard = document.getElementsByClassName("carCard");


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


var inputText = document.getElementById("inputText");

inputText.addEventListener("keyup", function() {
    if (event.keyCode === 13) {
        inputText.value = "";
    } else if (selectedCard === undefined) {
        alert("Hello");
    } else {
        var editDescription = selectedCard
        editDescription.innerHTML = inputText.value;
    }
});