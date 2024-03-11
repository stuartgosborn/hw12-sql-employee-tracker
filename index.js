const mysql = require("mysql");
const inquirer = require("inquirer");
const PORT = process.env.PORT || 3001;
require("dotenv").config();

const db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log(`Connected to the ${process.env.DB_NAME} database.`);
  init();
});


function init() {
    // Prompt user for action
    inquirer
      .prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit',
        ],
      })
      .then((answer) => {
        // Call appropriate function based on user choice
        switch (answer.action) {
          case 'View all departments':
            viewDepartments();
            break;
          case 'View all roles':
            viewRoles();
            break;
          case 'View all employees':
            viewEmployees();
            break;
          case 'Add a department':
            addDepartment();
            break;
          case 'Add a role':
            addRole();
            break;
          case 'Add an employee':
            addEmployee();
            break;
          case 'Update an employee role':
            updateEmployeeRole();
            break;
          case 'Exit':
            connection.end();
            break;
        }
      });
  }

  // Function to view all departments
function viewDepartments() {
    // MySQL query to select all departments
    db.query('SELECT * FROM departments', (err, res) => {
      if (err) throw err;
      console.table(res); // Display departments in formatted table
      init(); // Restart the application
    });
  }
  
  // Function to view all roles
  function viewRoles() {
    // MySQL query to select all roles with department information
    db.query('SELECT roles.id, roles.title, roles.salary, departments.name AS department FROM roles LEFT JOIN departments ON roles.department_id = departments.id', (err, res) => {
      if (err) throw err;
      console.table(res); // Display roles in formatted table
      init(); // Restart the application
    });
  }
  
  // Function to view all employees
  function viewEmployees() {
    // MySQL query to select all employees with role and department information
    db.query('SELECT employees.id, employees.first_name, employees.last_name, roles.title AS role, roles.salary, departments.name AS department FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id', (err, res) => {
      if (err) throw err;
      console.table(res); // Display employees in formatted table
      init(); // Restart the application
    });
  }
  
  // Function to add a department
  function addDepartment() {
    // Prompt user for department name
    inquirer
      .prompt({
        name: 'name',
        type: 'input',
        message: 'Enter the name of the department:',
      })
      .then((answer) => {
        // MySQL query to insert new department
        db.query('INSERT INTO departments SET ?', { name: answer.name }, (err, res) => {
          if (err) throw err;
          console.log('Department added successfully');
          init(); // Restart the application
        });
      });
  }