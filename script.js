"use strict";

/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'CORRECT!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 21;
document.querySelector('.score').textContent = 45;

document.querySelector('.predict').value = 32;
console.log(document.querySelector('.predict').value);*/

let hiddenNum = Math.trunc(Math.random()*10) + 1;
let points = 10;
let highPoints = 0
console.log(hiddenNum);
/*document.querySelector('.number').textContent = hiddenNum;*/

// Handling click events
document.querySelector('.check').addEventListener('click', function() {
    const predict = Number(document.querySelector('.predict').value);
    console.log(typeof predict, predict);
    
    /* when there's no input*/
    if(!predict) {// check if there's a value
        document.querySelector('.message').textContent = '🤦‍♀️Nay!';

        // when player wins
    } else if (predict === hiddenNum) {
        document.querySelector('.message').textContent = 'CORRECT!';
        document.querySelector('.number').textContent = hiddenNum;

        document.querySelector('body').style.backgroundColor = '#279207';

        document.querySelector('.number').style.width = '30rem';

        if(points > highPoints) {
            highPoints = points;
            document.querySelector('.highpoints').textContent = highPoints;
        }

        // when prediction is too big
    } else if (predict > hiddenNum) {
        if(points > 0) {
            document.querySelector('.message').textContent = '🙆‍♀️Too big number!';
            points--;
            document.querySelector('.points').textContent = points;
        } else {
            document.querySelector('.message').textContent = '👎LOOSER!'
        }

        document.querySelector('body').style.backgroundColor = 'rgb(248, 8, 8)';

        /*document.querySelector('.message').textContent = '🙆‍♀️Too big number!';
        score--; // score = score - 1
        document.querySelector('.score').textContent = score;*/


        // when prediction is too small
    } else if (predict < hiddenNum) {
        if(points > 1) {
            document.querySelector('.message').textContent = '🙇‍♀️Too small number!';
            points--;
            document.querySelector('.points').textContent = points;
            document.querySelector('body').style.backgroundColor = 'rgb(182, 191, 4)';

            } else {
            document.querySelector('.message').textContent = '👎LOOSER!';
            document.querySelector('.points').textContent = 0;
        }
        /*document.querySelector('.message').textContent = '🙇‍♀️Too small number!';
        points--; 
        document.querySelector('.points').textContent = points;*/
    } 
}); 

document.querySelector('.again').addEventListener('click', function() {
    points = 10;
    hiddenNum = Math.trunc(Math.random() * 10) + 1;

    document.querySelector('.message').textContent = "Let's start predicting...";
    document.querySelector('.message').textContent = points;
    document.querySelector('body').style.backgroundColor = 'rgb(227, 79, 79)';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.predict').value = '';
    document.querySelector('.number').style.width = '15rem';


})
// addEventListener- 
/*Implement a game rest functionality, so that player can make a new guess!
Your tasks:
1. Select element with 'again' class & attach a click event handler
2. In handler function,restore initial val of 'score' & 'hiddenNum' var
3. Restore initial condit. of message,number,score & guess i/p fields
4. Also restore original backgroundColor (#222) & no. width (15rem) */
