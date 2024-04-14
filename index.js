#! /usr/bin/env node
import inquirer from "inquirer";
let Todos = [];
let i = 1;
let condition = "true";
while (condition) {
    let questions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add in your Todos"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            default: "true",
            message: "Would you like to add more in your Todos"
        }
    ]);
    Todos.push(questions.firstQuestion);
    console.log(Todos.join('/n'));
    condition = questions.secondQuestion;
}
