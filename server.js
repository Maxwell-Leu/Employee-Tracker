const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'MoosE1706$',
        database: 'employee_db'
    },
    console.log(`Conected to the employee_db database.`)
)
/*
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
*/
function init(){
    inquirer.prompt([
        {
            type: 'list',
            message:'What would you like to do?',
            name: 'wwyltd',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ]).then((data) => {
        if (data.wwyltd === 'View all departments'){
            db.query("SELECT * FROM department;",function (err,results){})
        }else if(data.wwyltd == 'View all roles'){
            db.query("SELECT * FROM roles;",function (err,results){})
        }else if(data.wwyltd == 'View all employees'){
            db.query("SELECT * FROM employee;",function (err,results){})
        }else if(data.wwyltd == 'Add a department'){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'newDep',
                    message: 'Enter the new department.'
                }
            ]).then((data) => {
                db.query(`INSERT INTO department (dep_name) VALUES (?);`,data.newDep,function (err,results){
                    console.table('Department has been added.');
                })
            })
        }else if(data.wwyltd == 'Add a role'){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'newRole',
                    message: 'Enter the new role.'
                },
                {
                    type: 'input',
                    name: 'depId',
                    message: 'What is the department id of the role',
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'What is their salary'
                }
            ]).then((data) => {
                db.query(`INSERT INTO roles (title,department_id,salary) VALUES (?,?,CAST(? as DECIMAL));`,[data.newRole,parseInt(data.depId),data.salary],function (err,results){
                    console.table('Role has been added.');
                })
            })
        }else if(data.wwyltd == 'Add an employee'){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'Enter the first name.'
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'Enter the last name',
                },
                {
                    type: 'input',
                    name: 'roleId',
                    message: 'Enter is the role id'
                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: 'Enter is the id of the manager'
                }
            ]).then((data) => {
                db.query(`INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?);`,[data.firstName,data.lastName,data.roleId,data.managerId],function (err,results){
                    console.table('employee has been added.');
                })
            })
        }else if(data.wwyltd == 'Update an employee role'){
            db.query("SELECT * FROM employee;",function (err,results){
                console.table(results);
            })
        }
    })
}
init()
