// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'title',
        message: 'What is the title of of your project? (required)',
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('Please enter the name of your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project (required)',
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            } else {
                console.log('Please enter your project description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please enter the names of those who contributed to this project (required)',
        validate: contribInput => {
            if(contribInput) {
                return true;
            } else {
                console.log('Please enter the names of those who contributed to this project');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license',
        choices: ['MIT License', 'Apache License', 'BSD License', 'LGPL', 'GPL']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter any installation instructions.  If none enter "none". (required)',
        validate: installInput => {
            if(installInput) {
                return true;
            } else {
                console.log('Please enter any installation instructions.  If none enter "none".');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the Github link to your project. (Required)',
        validate: projectLink => {
            if(projectLink) {
                return true;
            } else {
                console.log('Please enter your project link!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email for questions on this project. (Required)',
        validate: projectEmail => {
            if(projectEmail) {
                return true;
            } else {
                console.log('Please enter your project email');
                return false;
            }
        }
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(data) {
        const filename = data.title
            .toLowerCase()
            .split(' ')
            .join('' + '.md')
        console.log(filename);
        console.log(data);
    })   
    // console.log(data);
}

// Function call to initialize app
init();
    
