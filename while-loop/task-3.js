/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let sum = 0;
let i = 81;
while( i <= 131){
        sum += i;
        // console.log(sum);
        i= i+2;
}
console.log(`sum of all odd numbers is: ${sum}`);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */
let sum2 = 0;
let j= 206;
while( j<= 311){
        if(j % 2 === 0){
                // console.log(j);
                sum2 += j;
                console.log(sum2);
        }
                j++;
}
console.log(`sum of all even numbers is: ${sum2}`);
