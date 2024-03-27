#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Define an array of colors
const colors = ["Red", "Blue", "Green", "Yellow"];
// Randomly select a color
const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];
// Determine the chalk color function based on the random color
let colorFunction;
switch (randomColor.toLowerCase()) {
    case 'red':
        colorFunction = chalk.red;
        break;
    case 'blue':
        colorFunction = chalk.blue;
        break;
    case 'green':
        colorFunction = chalk.green;
        break;
    case 'yellow':
        colorFunction = chalk.yellow;
        break;
    default:
        colorFunction = chalk.white;
}
// Prompt the user to guess the color
const answers = await inquirer.prompt([
    {
        name: "userGuessedColour",
        type: "input",
        message: "Please guess a Colour (Red, Blue, Green, Yellow): ",
    },
]);
const userGuessedColour = answers.userGuessedColour.toLowerCase(); // Convert input to lowercase for case-insensitive comparison
// Check if the user guessed correctly
if (userGuessedColour === randomColor.toLowerCase()) {
    console.log(colorFunction(`Correct! The color was ${randomColor}`));
}
else {
    console.log(colorFunction(`Incorrect! The correct color was ${randomColor}`));
}
