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
            generateHTML(team)
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

// Function that will generate a new Engineer
const createIntern = () => {

    return inquirer.prompt([

        {
            type: 'input',
            message: "What is the name of the Intern?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the Intern's employee ID?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is the Intern's email address?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What school does the Intern go to?",
            name: 'school'
        }

    ])
    .then(responses => {

        const intern = new Intern(responses.name, responses.id, responses.email, responses.school)
        team.push(intern)

        nextEmployee()

    })
}

// Function that will write the HTML file based on the user's inputs
const generateHTML = (team) => {

    const htmlBody = []

    for(let i=0; i < team.length; i++){

        if(team[i].getRole() === "Manager"){
            let newManager = managerCard(team[i])
            htmlBody.push(newManager)
        } else if(team[i].getRole() === "Engineer"){
            let newEngineer = engineerCard(team[i])
            htmlBody.push(newEngineer)
        } else if(team[i].getRole() === "Intern"){
            let newIntern = internCard(team[i])
            htmlBody.push(newIntern)
        } 
    }

    const fullPage = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap: CSS Only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body class="m-1 bg-light">
        
        <div class="jumbotron jumbotron-fluid bg-dark">
            <h1 class="display-4 text-light p-3 text-center">My Team Profile</h1>
        </div>
    
        <div id="container" class="container-fluid">
            <div class="row justify-content-evenly align-items-center">
            ${htmlBody.join('')} 
    </div>
    </div>
</body>
</html>`

createHTMLFile(fullPage)
}

// This function actually writes the file that is generated in the generateHTML function above
const createHTMLFile = (html) => {
    fs.writeFile("./dist/team-profile.html", html, err => {
        if (err) {
            console.log(err)
        } else {console.log('Success!')}
    })
}

// This function kicks off the process by asking the user for the manager's name
initialize()


// Below are the three helper generator functions for "Cards" from the HTML template that so they can be more easily used in the generateHTML function above

const managerCard = (manager) => {
return `<div class="card p-2 my-3 border border-success" style="width: 20rem; min-height:300px">
                <div class="card-body text-light" style="background-color: rgb(155, 80, 80); max-height: fit-content;">
                    <h2 class="card-title">${manager.name}</h2>
                    <h6 class="card-subtitle">${manager.getRole()}</h6>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                      <li class="card-text list-group-item"><strong>ID:</strong> ${manager.id}</li>
                      <li class="card-text list-group-item"><strong>Email:</strong> <a href="mailto:${manager.email}"> ${manager.email}</a></li>
                      <li class="card-text list-group-item"><strong>Office:</strong> ${manager.office}</li>
                  </ul>  
                </div>
            </div>`
}

const engineerCard = (engineer) => {
return `<div class="card p-2 my-3 border border-success" style="width: 20rem; min-height: 300px">
                <div class="card-body text-light" style="background-color: rgb(45, 70, 133); max-height: fit-content;">
                    <h2 class="card-title">${engineer.name}</h2>
                    <h6 class="card-subtitle">${engineer.getRole()}</h6>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                      <li class="card-text list-group-item"><strong>ID:</strong> ${engineer.id}</li>
                      <li class="card-text list-group-item"><strong>Email:</strong><a href="mailto:${engineer.email}"> ${engineer.email}</a></li>
                      <li class="card-text list-group-item"><strong>Github:</strong> <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                  </ul>  
                </div>
            </div>`
}

const internCard = (intern) => {
return `<div class="card p-2 my-3 border border-success" style="width: 20rem; min-height: 300px">
                <div class="card-body text-light" style="background-color: rgb(52, 101, 70); max-height: fit-content;">
                    <h2 class="card-title">${intern.name}</h2>
                    <h6 class="card-subtitle">${intern.getRole()}</h6>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                      <li class="card-text list-group-item"><strong>ID:</strong> ${intern.id}</li>
                      <li class="card-text list-group-item"><strong>Email:</strong><a href="mailto:${intern.email}"> ${intern.email}</a></li>
                      <li class="card-text list-group-item"><strong>School:</strong> ${intern.school}</li>
                  </ul>  
                </div>
            </div>`
}