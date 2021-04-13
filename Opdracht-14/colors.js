// While loop:

// Maak en nieuwe map en nieuwe javascript file.
// Maak een array genaamd colors met de kleuren: yellow, blue, red, orange.
// Schrijf een while loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.

// colors = ["yellow", "blue", "red", "orange"];

// for (i = 1; i < 5; i++) {
//     console.log("color" + i);
// }
// console.log("All colors now looped");

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;