// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
          if(titleInput) {
            return true;
          }
          else {
            console.log('Please enter the title of your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project (Required)',
        validate: descriptionInput => {
          if(descriptionInput) {
            return true;
          }
          else {
            console.log(`Please enter your project's description!`);
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'table',
        message: 'Would you like to include a table of contents?',
        default: true
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide provide insturctions on how to install your project',
      },
      {
        type: 'input',
        name: 'usage',
        message: `Provide instructions and examples for use. Include screenshots as needed.
        To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it.
        Then, using the relative filepath, add it to your README using the following syntax:
        ![alt text](assets/images/screenshot.png)`,
      },
      {
        type: 'list',
        name: 'licnese',
        message: 'Choose a licensing option',
        choices: ['GNU AGPLv3', 'GNU GPLvs', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Provide provide guidlines for how other users can contribute',
      },
      {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to include a tests section?',
        default: true
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide examples of the tests and instructions on how to run them',
        when: ({ confirmTests }) => {
          if (confirmTests) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmQuestions',
        message: 'Would you like to include a questions section?',
        default: true
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Enter your github username so that users can reach out if they have questions',
        when: ({ confirmQuestions }) => {
          if (confirmQuestions) {
            return true;
          } else {
            return false;
          }
        }
      },
]);
};

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}



// TODO: Create a function to initialize app
function init() {
    
    };


// Function call to initialize app
init()
