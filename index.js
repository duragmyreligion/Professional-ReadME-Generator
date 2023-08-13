const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

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
  message: 'Enter the title of your project:',
  name: 'title',
},
{
  type: 'input',
  message: "Enter your project's description:",
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
    message: 'Enter what the user needs to know about contributing to this repo:',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Enter the command that needs to be run for testing:',
    name: 'test',
  },
  {
    type: 'list',
    message: 'Select which license this project should use:',
    name: 'license',
    choices: [
        "MIT",
        "APACHE",
        "GPL",
        "BSD",
        "None"
    ]
  }

];

function writeToFile(fileName, data) {
  let content = generateMarkdown(data);
  fs.writeFile(fileName, content, function (error) {
    if (error) {
      return console.log(error)
    } else
    console.log('File created succesfully.')
  });
}

function init() {
  inquirer.prompt(questions).then(function (data) {
    var fileName = './assets/generated_readme/README.md';
    writeToFile(fileName, data)
  })
}

init();
