// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import { generateMarkdown } from "./utils/generateMarkdown.js"; 



// TODO: Create an array of questions for user input
// add more: installation, usage, license, contributing, tests, questions
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "motivation",
        message: "What was you motivation?"
    },
    {
        type: "input",
        name: "reason",
        message:"Why did you build this project?"
    },
    {
        type: "input",
        name: "problem",
        message:"What problem does it solve?"
    },
    {
        type: "input",
        name: "learning",
        message:"What did you learn?",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage instructions. Include screenshots if needed.",
    },
    {
        type: "list",
        name: "license",
        message: "Please provide license information.",
        choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC", "None"]
    },
    {
        type: "input",
        name: "Contributors",
        message: "Please provide contributors:",
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide test instructions.",
    },
    {
        type: "input",
        name: "github",
        message: "Please provide your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email address for contact purposes.",
    },
];

// TODO: Create a function to write README file
// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error("An error occurred while writing to the file:", err);
            return;
        }
        console.log("README.md has been generated successfully.");
    });
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log("Generating README...");
        writeToFile("README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();
