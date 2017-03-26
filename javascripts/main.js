var CarLot = (function() {
	
function listInventory (cars) {

                var carList = document.getElementById("car-list");
                var carString = "";
                // inventoryLoader.addEventListener("error", executeThisAfterFileFails);
                for (var i = 0; i < cars.length; i++) {
                    var currentCar = cars[i];

                    // carString += `<div class="col-lg-3 col-lg-3 col-lg-3">`;
                    // carString += `<div class="thumbnail">`;
                    // carString += `<h2 class="">${currentCar.make}</h2>`;
                    // carString += `<h2 class="">${currentCar.model}</h2>`;
                    // carString += `<h2 class="">${currentCar.year}</h2>`;
                    // carString += `<h2 class="">${currentCar.price}</h2>`;
                    // carString += `<h2 class="">${currentCar.description}</h2>`;
                    // carString += `</div></div>`;

                }

                carList.innerHTML = carString;
}

function gridInventory (cars) {

                var gridList = document.getElementById("car-grid");
                var carString = "";
                // inventoryLoader.addEventListener("error", executeThisAfterFileFails);
                for (var i = 0; i < cars.length; i++) {
                    var currentCar = cars[i];

                    carString += `<div class="carCard">`;
                    // carString += `<div class="thumbnail">`;
                    carString += `<h3>${currentCar.make}</h3>`;
                    carString += `<h5>${currentCar.model}</h5>`;
                    carString += `<h5>${currentCar.year}</h5>`;
                    carString += `<h5>${currentCar.price}</h5>`;
                    carString += `<h6>${currentCar.description}</h6>`;
                    carString += `</div>`;

                }

                gridList.innerHTML = carString;
}
CarLot.loadInventory(listInventory);
CarLot.loadInventory(gridInventory);

})();








