//9/3/17




/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 25.00
var checkBalance = true;
var isActive = true;

// your code goes here
if(checkBalance === false){
    console.log("Thank you! Have a nice day!");
}
else if(balance > 0 && isActive === true){
    console.log("Your balance is $" + balance.toFixed(2) + ".");
}
else if(isActive === false){
    console.log("Your account is no longer active.");
}
else if(balance === 0){
        console.log("Your account is empty.");
}
else{
    console.log("Your account is negative. Please contact the bank.");
}






//UNVERIFIED
/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 *
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 *
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "vanilla";
var vessel = "cone";
var toppings = "sprinkles";

// Add your code here
if((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings ==="sprinkles" || toppings === "peanuts")){
    console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}




//UNVERIFIED
/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// your code goes here
if((shirtWidth > 17 && shirtWidth < 20) && (shirtLength === 28 ) && (shirtSleeve > 8.12 && shirtSleeve < 8.38) ) {
    console.log("S");
}
else if((shirtWidth > 19 && shirtWidth < 22 ) && (shirtLength === 29 ) && (shirtSleeve > 8.37 && shirtSleeve < 8.63) ) {
    console.log("M");
}
else if((shirtWidth > 21 && shirtWidth < 24) && (shirtLength === 30 ) && (shirtSleeve > 8.62 && shirtSleeve < 8.88 ) ) {
    console.log("L");
}
else if((shirtWidth > 23 && shirtWidth < 26) && (shirtLength > 30 && shirtLength < 33 ) && (shirtSleeve > 8.87 && shirtSleeve < 9.63 ) ) {
    console.log("XL");
}
else if((shirtWidth > 25 && shirtWidth < 28) && (shirtLength > 32 && shirtLength < 34) && (shirtSleeve > 9.62 && shirtSleeve < 10.13) ) {
    console.log("2XL");
}
else if((shirtWidth > 27 ) && (shirtLength > 33 ) && (shirtSleeve > 10.12 ) ) {
    console.log("3XL");
}
else{
    console.log("N/A");
}



//========================================
//9/5/17


/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = false;
var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : undefined);
console.log(category);






var month = 2;

switch(month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = 28;
}

console.log("There are " + days + " days in this month.");


var tier = "nsfw deck";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);
