// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = readmeData => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide.- What was your motivation?- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.") - What problem does it solve? - What did you learn? (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please describe your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please provide installation instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please provide usage instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please name all contributors for this project. (Required)',
        validate: contributionInput => {
          if (contributionInput) {
            return true;
          } else {
            console.log('Please list all project contributors!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'What tests did you run for your project? (Required)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Please provide test examples for your project!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'licenses',
        message: 'What license did you use?',
        choices: ['ISC', 'MIT', 'Zero Clause BSD']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
      },
    ]);   
  };
  
 



// // TODO: Create a function to write README file
// function writeFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

questions()
  .then(readmeData => {
    return generatePage(readmeData);
  })
  // TODO: Create a function to write README file
  .then(readmeGenerator => {
    return writeFile(readmeGenerator, readmeData);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });