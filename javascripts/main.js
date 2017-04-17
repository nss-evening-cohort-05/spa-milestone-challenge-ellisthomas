var CarLot = (function(oldCarLot) {
	
oldCarLot.listInventory = function (cars) {

                var carList = document.getElementById("car-list");
                var carString = "";
                for (var i = 0; i < cars.length; i++) {
                    var currentCar = cars[i];
                }
                carList.innerHTML = carString;
}

oldCarLot.gridInventory = function (cars) {

                var gridList = document.getElementById("car-grid");
                var carString = "";
                for (var i = 0; i < cars.length; i++) {
                    var currentCar = cars[i];

                    carString += `<div class="carCard">`;
                    // carString += `<div class="thumbnail">`;
                    carString += `<h3>${currentCar.make}</h3>`;
                    carString += `<h5>${currentCar.model}</h5>`;
                    carString += `<h5>${currentCar.year}</h5>`;
                    carString += `<h5>${currentCar.price}</h5>`;
                    carString += `<img class="carPic" src="${currentCar.image}">`;
                    carString += `<p class="description">${currentCar.description}</p>`;
                    carString += `</div>`;
                }

                gridList.innerHTML = carString;
}
CarLot.loadInventory(CarLot.listInventory);
CarLot.loadInventory(CarLot.gridInventory);

return oldCarLot;

})(CarLot || {});








