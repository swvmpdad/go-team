const writeFile = require('./utils/generate-site');
const inquirer = require('inquirer');

const promptTeam = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
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
            },
            {
                type: 'number',
                name: 'office',
                message: "What is the manager's office number?",
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid office number.');
                        return false;
                    }
                }
            }
        ]);
};

const promptMember = memberData => {
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
        .then(response => {
            if (response.position === 'Engineer') {
                if (!memberData.engineers) {
                    memberData.engineers = [];
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
                    type: 'input',
                    name: 'github',
                    message: "What is the engineer's Github username?",
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
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
            .then(engineerData => {
                memberData.engineers.push(engineerData);
                if (engineerData.confirmAddMember) {
                    return promptMember(memberData);
                } else {
                    return memberData;
                }
            });
            } else if (response.position === 'Intern') {
                if (!memberData.interns) {
                    memberData.interns = [];
                }
                return inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is the intern's name?",
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
                        message: "What is the intern's ID number?",
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
                        message: "What is the intern's email?",
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
                        type: 'input',
                        name: 'school',
                        message: "What is the intern's school?",                     
                        validate: schoolInput => {
                            if (schoolInput) {
                                return true;
                            } else {
                                console.log('Please enter a valid school.');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'confirm',
                        name: 'confirmAddMember',
                        message: 'Would you like to add another team member?'
                    } 
                ]).then(internData => {
                    memberData.interns.push(internData);
                    if (internData.confirmAddMember) {
                        return promptMember(memberData);
                    } else {
                        return memberData;
                    }
                });
            }
        }
);};

promptTeam()
    .then(promptMember)
    .then(memberData => {
        writeFile(memberData);
    })
    .then(writeFileResponse => {
        console.log('Site created!');
    })
    .catch(err => {
        console.log(err)
    });
