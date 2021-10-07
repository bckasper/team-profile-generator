// Requirements for this script to run
const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const { create } = require("domain")

// This array will store all the employees the user puts in to generate the page for
const team = []

// This initialization will prompt the user to first enter a manager
const initialize = () => {

    return inquirer.prompt([

        {
            type: 'input',
            message: "What is the name of the Manager?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the Manager's employee ID?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is the Manager's email address?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What office is the Manager located in?",
            name: 'office'
        }
    ])
    .then(responses => {

        const manager = new Manager(responses.name, responses.id, responses.email, responses.office)
        team.push(manager)

        nextEmployee()

    })
}

// Function to determine the next employee the user will create
const nextEmployee = () => {

    return inquirer.prompt(
        {
            type: 'list',
            message: "Please choose another employee to add or select Finished if you are ready to generate your profile page.",
            name: 'employee',
            choices: ['Engineer', 'Intern', 'Finished']
        }
    )
    .then(response => {

        if(response.employee === 'Engineer'){
            createEngineer()
        } else if(response.employee === 'Intern'){
            createIntern()
        } else {
            generateHTML()
        }
    })
}

// Function that will generate a new Engineer
const createEngineer = () => {

    return inquirer.prompt([

        {
            type: 'input',
            message: "What is the name of the Engineer?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the Engineers's employee ID?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is the Engineers's email address?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is the Engineer's github username?",
            name: 'github'
        }

    ])
    .then(responses => {

        const engineer = new Engineer(responses.name, responses.id, responses.email, responses.github)
        team.push(engineer)

        nextEmployee()

    })

}




initialize()