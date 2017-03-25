var carContainer = document.getElementById("carContainer");

function carData(xhrData) {
	var carString = "";
	var currentCar;
console.log("inside function");
	for (var i = 0; i < xhrData.cars.length; i++) {
		currentCar = xhrData.cars[i];
console.log("inside for loop");
		currentCar += `<div class="col-lg-3 col-lg-3 col-lg-3">`;
		currentCar += `<div class="thumbnail">`;
		currentCar += `</div></div>`;
	}

}



function executeThisAfterFileLoaded() {
	var data = JSON.parse(this.responseText)
	carData(data);
}

function executeThisAfterFileFails() {
	
}





var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisAfterFileLoaded);
myRequest.addEventListener("error", executeThisAfterFileFails);
myRequest.open("GET", "inventory.json");
myRequest.send();
