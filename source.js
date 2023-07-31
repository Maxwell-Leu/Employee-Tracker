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

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})