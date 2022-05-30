/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');

let x = parseInt(inputs[0]);
let y = parseInt(inputs[1]);

let first_x = 0;
let first_y = 0;
let last_x = W;
let last_y = H;

while(true){
// game loop
    const direction = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
        
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    
    
    if (direction.includes('L')){
        last_x = x--;
    } else if (direction.includes('R')){
        first_x = x++;
    }
    
    if (direction.includes('U')) {
        last_y = y--;
    } else if  (direction.includes('D')){
        first_y = y++;
    };


    x = Math.floor((first_x + last_x) /2) ;
    y = Math.floor((first_y + last_y) /2) ;

    console.log(x, y) 
}
