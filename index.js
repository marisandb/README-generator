// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generatePage = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');

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
        name: 'email',
        message: 'Enter your email so that users can reach out to you with questions. (Required)',
        validate: emailInput => {
          if(emailInput) {
            return true;
          }
          else {
            console.log(`Please enter your email!`);
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'username',
        message: 'Enter your github username so that users can reach out if they have questions',
        validate: usernameInput => {
          if (usernameInput) {
            return true;
          } else {
              console.log('Please enter your github username!')
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'repoName',
        message: 'Enter the name of your repository, please use the exact name',
        validate: repoNameInput => {
          if (repoNameInput) {
            return true;
          } else {
              console.log('Please enter the name of your repository!')
            return false;
          }
        }
      },
]);
};

// TODO: Create a function to write README file
const writeFile = answers => {
  console.log(answers)
    return new Promise((resolve, reject) => {
      fs.writeFile('README.md', generatePage({...answers}), err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

  
//   // TODO: Create a function to initialize app
  function init() {
      questions().then((answers) => {
        //console.log('hello')
          writeFile({...answers});
        });
    };

    // Function call to initialize app
    init()
    
    module.exports = {writeFile};