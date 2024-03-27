#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Define an array of colors
const colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Indigo", "Violet"];
// Randomly select a color
const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];
// Prompt the user to guess the color
const answers = await inquirer.prompt([
    {
        name: "userGuessedColour",
        type: "input",
        message: "Please guess a Colour (Red, Blue, Green, Yellow, Orange, Indigo, Violet): ",
    },
]);
const userGuessedColour = answers.userGuessedColour.toLowerCase(); // Convert input to lowercase for case-insensitive comparison
// Check if the user guessed correctly
if (userGuessedColour === randomColor.toLowerCase()) {
    console.log(chalk.green(`Correct! The color was ${randomColor}`));
}
else {
    console.log(chalk.red(`Incorrect! The correct color was ${randomColor}`));
}
