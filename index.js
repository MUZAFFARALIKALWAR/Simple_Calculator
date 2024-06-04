#!/usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright `***** Wellcome to Muzaffar ali calculator app****** \n`);
const answer = await inquirer.prompt([
    {
        message: chalk.yellowBright("Enter 1st Number"),
        type: "number",
        name: "firstNumber"
    },
    {
        message: chalk.yellowBright("Enter 2nd Number"),
        type: "number",
        name: "SecondNumber"
    },
    {
        message: chalk.greenBright("select one of the operators perform operation"),
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/", "**", "%"]
    },
]);
if (answer.operator === "+") {
    console.log(chalk.greenBright(answer.firstNumber + " + " + answer.SecondNumber + " = ", answer.firstNumber + answer.SecondNumber));
}
else if (answer.operator === "-") {
    console.log(chalk.greenBright(answer.firstNumber + " - " + answer.SecondNumber + " = ", answer.firstNumber - answer.SecondNumber));
}
else if (answer.operator === "*") {
    console.log(chalk.greenBright(answer.firstNumber + " * " + answer.SecondNumber + " = ", answer.firstNumber * answer.SecondNumber));
}
else if (answer.operator === "/") {
    console.log(chalk.greenBright(answer.firstNumber + " / " + answer.SecondNumber + " = ", answer.firstNumber / answer.SecondNumber));
}
else if (answer.operator === "**") {
    console.log(chalk.greenBright(answer.firstNumber + " ** " + answer.SecondNumber + " = ", answer.firstNumber ** answer.SecondNumber));
}
else if (answer.operator === "%") {
    console.log(chalk.greenBright(answer.firstNumber + " % " + answer.SecondNumber + " = ", answer.firstNumber % answer.SecondNumber));
}
else {
    console.log("pleace select valid operator");
}
console.log(chalk.redBright("GOOD BYE..."));
//this is my fist project 
