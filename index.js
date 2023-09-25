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

const questions = [
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
            'Update an Employee Role'
        ]}
]

const handlerFunction = (err, res) => {
    if (res === 'View All Departments') {
        db.query('SELECT * FROM department', (err, result) => {
            if (err) {
                console.log(err);
            }
            console.table(result)
        })
    }
};

const init = (questionsArray, handlerFunction) => {
    inquirer
        .prompt(questionsArray)
        .then(handlerFunction)
};

init(questions, handlerFunction);
