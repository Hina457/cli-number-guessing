#!/usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 - 5: ",
    },
]);
if (answers.userGuessedNumber === randomnumber) {
    console.log("Congratulation! you guessed right number.");
}
else {
    console.log("you guessed wrong number ");
    console.log("Thank you!");
}
;
