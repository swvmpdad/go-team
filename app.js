const { writeFile, copyFile } = require('./utils/generate-site');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const promptTeam = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid name.');
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'id',
                message: "What is the manager's ID number?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid ID number.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email?",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid email.');
                        return false;
                    }
                }
            }
        ])
};

const teamMemberType = () => {
    console.log(`
    =====================
    Add a New Team Member
    =====================
    `);
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'position',
                message: 'Which position do you want to add?',
                choices: ['Engineer', 'Intern']
            }
        ])
};

const engineerMember = () => {
    if (!engineerData.members) {
    engineerData.members = [];
    }

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid name.');
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'id',
                message: "What is the engineer's ID number?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid ID number.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid email.');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddMember',
                message: 'Would you like to add another team member?'
            }
        ])
        .then(engMemberData => {
            engineerData.members.push(engMemberData);
            if (engMemberData.confirmAddMember) {

            }
        })
};

const internMember = () => {

};