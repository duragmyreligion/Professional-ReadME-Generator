const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'Enter GitHub username:',
    name: 'username',
  },
{
  type: 'input',
  message: 'Enter your email address:',
  name: 'email',
},
{
  type: 'input',
  message: 'Enter the name of your project:',
  name: 'title',
},
{
  type: 'input',
  message: 'Enter a short description of your project:',
  name: 'desc',
},
{
    type: 'input',
    message: 'Enter the command required to install dependecies:',
    name: 'install',
  },
  {
    type: 'input',
    message: 'Enter what the user needs to know in order to use this repo:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Enter what the user needs to know about contributing to this repo',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Enter the command that needs to be run for testing:',
    name: 'test',
  },
  {
    type: 'list',
    message: 'Select which license this project should have:',
    name: 'licenses',
    choices: [
        "MIT License",
        "Apache License 2.0",
        "GPL-3.0",
        "BSD 2-Clause",
        "No License"
    ]
  }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
