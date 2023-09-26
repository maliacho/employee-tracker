const inquirer = require('inquirer');
const mysql = require('mysql2')


const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'company_db'
    },
    console.log('Connected to the company database.')
);

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
    .then(answer) => {
    if (answer.choiceInput === 'View All Departments') {
        db.query('SELECT * FROM department',
            function (err, results) {
                console.log(results)
            }
        )
    } else if (answer.choiceInput === 'View All Roles') {
        db.query('SELECT * FROM role',
            function (err, results) {
                console.log(results)
            }
        )
    }
};


const init = (questionsArray, handlerFunction) => {
    inquirer
        .prompt(questionsArray)
        .then(handlerFunction)
};

init(intialQuestions, handlerFunction);
