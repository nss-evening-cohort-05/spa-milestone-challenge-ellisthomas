var CarLot = (function() {
    var privateCars = [];
    return {
        loadInventory: function(callback) {
            var inventoryLoader = new XMLHttpRequest();

            inventoryLoader.addEventListener("load", function() {
                privateCars = JSON.parse(this.responseText).cars;
                console.log(privateCars);
                callback(privateCars);
            });

            inventoryLoader.open("GET", "inventory.json");
            inventoryLoader.send();
        }
    }
})();










