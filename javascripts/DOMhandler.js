////////// event listeners will go here

selectedCard = document.getElementsByClassName("carCard");
var clickedCard;

window.addEventListener("click", function(e) {
    for (var k = 0; k < selectedCard.length; k++) {
        selectedCard[k].classList.remove("add-border", "add-background");
    inputText.addEventListener("keyup", inputText);

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

var output = document.getElementsByClassName("description");
	
// function userInput(event) {
// 	if (event.keyCode === 13) {
//         inputText.value = "";
//     } else {
//     	for (var i = 0; i < output.length; i++) {
//     		 if (output[i].parentNode.parentNode.classList.contains("add-border","add-background")){
//     		 	var userText = inputText.value;
//     		 	output[i].innerHTML = userText;
//     		 }
//     	}
//     }
// };

var inputText = document.getElementById("inputText");

inputText.addEventListener("keyup", function() {
    if (event.keyCode === 13) {
        inputText.value = "";
    } else if (clickedCard === undefined) {
        alert("Hello");   // I am making it this far
    } else {
        var userText = inputText.value;
        editDescription.innerHTML = inputText.value;
    }
});











