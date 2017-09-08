//September 7 2017





/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 20) {
    // check divisibility
    // print Julia, James, or JuliaJames
    // increment x
    if(x  % 3 === 0 && x % 5 === 0){
        console.log("JuliaJames");
    }
    else{
        if(x  % 3 === 0){
            console.log("Julia");
        }
        else if(x % 5 === 0){
            console.log("James")
        }
        else{
            console.log(x);
        }
    }
    x += 1;
}






/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num >= 1) {
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
    //    console.log(num + "bottles of juice on the wall! " + num +" bottles of juice! Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!");
    if(num===2){
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num-1) + " bottle of juice on the wall!");    }
    else if(num===1){
        console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!");    }
    else{
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!");
    }
    num--;
}





/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var seconds = 60;

while(seconds >= 0){
    switch(seconds){
    case 50:
        console.log("Orbiter transfers from ground to internal power");
        break;
    case 31:
        console.log("Ground launch sequencer is go for auto sequence start");
        break;
    case 16:
        console.log("Activate launch pad sound suppression system");
        break;
    case 10:
        console.log("Activate main engine hydrogen burnoff system");
        break;
    case 6:
        console.log("Main engine start");
        break;
    case 0:
        console.log("Solid rocket booster ignition and liftoff!");
        break;
    default:
        console.log("T-" + seconds + " seconds");
    }
    seconds--;
}





/*
 * Programming Quiz: Changing the Loop (4-4)
 */

// rewrite the while loop as a for loop
/*
var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}
*/
for(var x=9; x>=1; x--){
    console.log("hello " + x);
}






/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here
for(var rows=0; rows<=25; rows++){
    for(var seats=0; seats<=99; seats++){
        console.log(rows + "-" + seats);
    }
}






/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

// your code goes here
function laugh(){
    var laugh= '';
    laugh = "hahahahahahahahahaha!";
    return laugh;
}
console.log(laugh());
