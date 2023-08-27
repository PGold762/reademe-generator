// Const's to use mods and use of MarkDown.js page 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter project description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter how to install this app:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter the contributions:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter the testing information:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like?',
        choices: [
            'MIT', 'Apache', 'ISC', 'Unlicense'
        ],
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err);
        } else {
          console.log('README.md generated successfully.');
        }
      });
}

// Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    })
    .catch(error => {
      console.error(error);
    });
}

// Function call to initialize app
init();
