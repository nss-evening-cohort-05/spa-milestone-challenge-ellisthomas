# spa-milestone-challenge

## Instructions
>You operate a used car lot, and need to have an application where you can update the description and availability of each car in your inventory. You are going to using the Bootstrap grid to lay out your HTML structure.

## Technical Requirements

Create one global variable (e.g. CarLot) and use the IIFE pattern to augment it two times in separate JavaScript files.
The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. getInventory).
The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application. Name the function activateEvents.
The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
A car DOM element that was clicked on.
A color name of your choice (see behavior requirement 5 above).
Have a complete Readme


### Screenshot
![iife-cars](https://raw.githubusercontent.com/nss-evening-cohort-05/spa-milestone-challenge-ellisthomas/challenge/screenshots/Screen%20Shot%202017-04-10%20at%2010.38.57%20PM.png)

### Code sample
```
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
```

### Languages Used
- HTML
- CSS
- JavaScript

### Contributors 
[Ellis Thomas](https://github.com/ellisthomas)