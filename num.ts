#! /usr/bin/env node

import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() *10+1); // we use round bracket for calling random ( round bracket is used for calling here)
const answer = await inquirer.prompt ([
    { 
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 - 10:",
    },
]);

console.log (answer);

// conditional statement

if (answer.UserGuessedNumber === randomNumber) {
    console.log("congtratulation! you guessed a right number. :)");
} else {
    console.log("you guessed a wrong better luck next time. :(");
}