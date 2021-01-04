// declare const for fs library and inquirer module
const fs = require('fs');
const inquirer = require('inquirer');

const markdown = require("./utils/markdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username."
  },{
    type: "input",
    name: "email",
    message: "Please enter your email address."
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?"
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project"
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i"
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test"
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
  });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((resp) => {
      console.log("Generating README...");
      writeToFile("2README.md", markdown({...resp})); //spread operator
    })
  }

// function call to initialize program
init();