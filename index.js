const inquirer = require('inquirer');
const db = require('./config/connection')

const intialQuestions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'choiceInput',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update an Employee',
        ]
    }
];

const addDepartment = [
    {
        type: 'input',
        message: 'What is the name of the department?',
        name: 'deptNameInput'
    }
];

const addRole = [
    {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'nameInput',
    },
    {
        type: 'input',
        message: 'What is the salary of the role?',
        name: 'salaryInput',
    },
    {
        type: 'list',
        message: 'What department will this role be in?',
        name: 'departmentInput',
        choices: []
    }
];

const addEmployee = [
    {
        type: 'input',
        message: 'Please enter the employees first name: ',
        name: 'firstName'
    },
    {
        type: 'input',
        message: 'Please enter the employees last name: ',
        name: 'lastName'
    },
    {
        type: 'input',
        message: 'What is this employees role?',
        name: 'employeeRole'
    },
    {
        type: 'list',
        message: 'Who is this employees manager?',
        name: 'employeeManager',
        choices: []
    }
];

const updateEmployee = [
    {
        type: 'list',
        message: 'Which employee would you like to update? ',
        name: 'updatedEmployee',
        choices: []
    },
    {
        type: 'input',
        message: 'What is their new role?',
        name: 'updatedRole',
    }
];


inquirer.prompt(intialQuestions)
    .then((answer) => {
        if (answer.choiceInput === 'View All Departments') {
            db.query('SELECT * FROM department',
                function (err, results) {
                    console.table(results)
                }
            )
        } else if (answer.choiceInput === 'View All Roles') {
            db.query('SELECT * FROM role',
                function (err, results) {
                    console.table(results)
                }
            )
        } else if (answer.choiceInput === 'View All Employees') {
            db.query('SELECT * FROM employee',
                function (err, results) {
                    console.table(results)
                }
            )
        } else if (answer.choiceInput === 'Add a Department') {
            inquirer.prompt(addDepartment)
                .then((answer) => {
                    db.query('INSERT INTO department (name) VALUES (?)', [answer.deptNameInput], (err, result) => {
                        if (err) throw err;
                        console.log(`Succesfully added ${answer.deptNameInput} to the company database.`)
                    })
                }
                )
        } else if (answer.choiceInput === 'Add a Role') {
            inquirer.prompt(addRole)
            .then((answer) => {
                db.query('INSERT INTO role (title, salary, department_id) VALUES (?)', [answer.nameInput, answer.salaryInput, answer.departmentInput], (err, result) => {
                    if (err) throw err;
                    console.log(`Successfully added ${answer.nameInput} to the company database.`)
                })
            })
        } else if (answer.choiceInput === 'Add an Employee') {
            inquirer.prompt(addEmployee)
            .then((answer) => {
                db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?)', [answer.firstName, answer.lastName, answer.employeeRole, answer.employeeManager], (err, result) => {
                    if (err) throw err;
                    console.log(`Succesfully added ${answer.firstName} ${answer.lastName} to the company database.`)
                })
            })
        } else if (answer.choiceInput === 'Update an Employee') {
            inquirer.prompt(updateEmployee)
            .then((answer) => {
                db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?)', [answer.updateEmployee, answer.updatedRole], (err, result) => {
                    if (err) throw err;
                    console.log(`Succesfully updated ${answer.updatedEmployee}.`)
                })
            })
        }
    });



