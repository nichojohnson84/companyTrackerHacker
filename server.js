const mysql = require("mysql2");
const inquirer = require("inquirer");
const db = require("./db/connection");

const PORT = process.env.PORT || 3001;

function start() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "UserChoices",
        message: "What would you like to do?",
        choices: [
          "Add Department",
          "Add Roles",
          "Add employee",
          "View departments",
          "View roles",
          "View employees",
          "View employees with role title",
          "View employees by manager",
          "Update employee roles",
          "Update employee manager",
          "Delete Departments",
          "Delete roles",
          "Delete Employees",
          "exit",
        ],
      },
    ])
    .then((userChoices) => {
      switch (userChoices.UserChoices) {
        case "Add Department":
          addDepartment();
          break;
        case "Add Roles":
          addRoles();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "View departments":
          viewDepartments();
          break;
        case "View roles":
          viewRoles();
          break;
        case "View employees":
          viewEmployees();
          break;
        case "View employees with role title":
          viewEmployeesWithRoleTitle();
          break;
        case "View employees by manager":
          viewEmployeesByManager();
          break;
        case "Update employee roles":
          UpdateEmployeeRoles();
          break;
        case "Update employee manager":
          UpdateEmployeeManager();
          break;
        case "Delete Departments":
          deleteDepartments();
          break;
        case "Delete roles":
          deleteRoles();
          break;
        case "Delete Employees":
          deleteEmployees();
          break;
        case "exit":
          connection.end();
          break;
        default:
      }
    });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "DepartmentName",
        message: "What department do you want to add?",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO department SET ?",
        {
          name: answer.DepartmentName,
        },
        function (err) {
          if (err) throw err;
          console.log("You inserted a new department successfully!");
          start();
        }
      );
    });
}

function addRoles() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "titleName",
        message: "What title do you want to add?",
      },
      {
        type: "input",
        name: "salary",
        message: "How much Salary do you want to add?",
      },
      {
        type: "input",
        name: "departmentId",
        message: "Which department id?",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.titleName,
          salary: answer.salary,
          department_id: answer.departmentId,
        },
        function (err) {
          if (err) throw err;
          console.log("You inserted a new Role successfully!");
          start();
        }
      );
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "Employee name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "Employee last name?",
      },
      {
        type: "input",
        name: "roleId",
        message: "Any role id?",
      },
      {
        type: "input",
        name: "managerId",
        message: "Any manager id?",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.roleId,
          manager_id: answer.managerId,
        },
        function (err) {
          if (err) throw err;
          console.log("You inserted a new employee successfully!");
          start();
        }
      );
    });
}

function viewDepartments() {
  connection.query("SELECT * FROM department", function (err, results) {
    if (err) throw err;
    console.table(results);
    start();
  });
}

function viewRoles() {
  connection.query("SELECT * FROM role", function (err, results) {
    if (err) throw err;
    console.table(results);
    start();
  });
}

function viewEmployees() {
  connection.query("SELECT * FROM employee", function (err, results) {
    if (err) throw err;
    console.table(results);
    start();
  });
}

function viewEmployeesWithRoleTitle() {
  let query =
    "SELECT employee.id, employee.first_name, employee.last_name, role.title, employee.manager_id ";
  query += "FROM employee INNER JOIN role ON (role.id =employee.role_id) ";
  connection.query(query, function (err, results) {
    if (err) throw err;
    console.table(results);
    start();
  });
}

function viewEmployeesByManager() {
  connection.query(
    "SELECT manager_id * FROM employee",
    function (err, results) {
      if (err) throw err;
      inquirer
        .prompt([
          {
            name: "choice",
            type: "rawlist",
            choices: function () {
              let choicesArray = [];
              for (let i = 0; i < results.length; i++) {
                choicesArray.push(results[i].manager_id);
              }
              return choicesArray;
            },
            messages: "Which Manager do you want to see?",
          },
        ])
        .then(function (answer) {
          connection.query(
            "SELECT first_name, last_name, manager_id FROM employee WHERE ?",
            [
              {
                manager_id: answer.choice,
              },
            ],
            function (err, result) {
              if (err) throw err;
              console.table(result);
              start();
            }
          );
        });
    }
  );
}

function UpdateEmployeeRoles() {
  connection.query("SELECT * FROM employee", function (err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function () {
            var choicesArray = [];
            for (var i = 0; i < results.length; i++) {
              choicesArray.push(results[i].first_name);
            }
            return choicesArray;
          },
          messages: "Which employee do you want to Update role?",
        },
        {
          name: "UpdateRole",
          type: "input",
          message: "What is the employee new role id?",
        },
      ])
      .then(function (answer) {
        connection.query(
          "UPDATE employee SET ? WHERE ?",
          [
            {
              role_id: answer.UpdateRol,
            },
            {
              first_name: answer.choice,
            },
          ],
          function (err) {
            if (err) throw err;
            console.log("You have updated Role successfully!");
            start();
          }
        );
      });
  });
}

function UpdateEmployeeManager() {
  connection.query("SELECT * FROM employee", function (err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function () {
            let choicesArray = [];
            for (let i = 0; i < results.length; i++) {
              choicesArray.push(results[i].first_name);
            }
            return choicesArray;
          },
          messages: "Which employee do you want to Update Manager?",
        },
        {
          name: "UpdateRole",
          type: "input",
          message: "What is the employee new Manager id?",
        },
      ])
      .then(function (answer) {
        connection.query(
          "UPDATE employee SET ? WHERE ?",
          [
            {
              manager_id: answer.UpdateRole,
            },
            {
              first_name: answer.choice,
            },
          ],
          function (err) {
            if (err) throw err;
            console.log("You have updated Manager id successfully!");
            start();
          }
        );
      });
  });
}

function deleteDepartments() {
  connection.query("SELECT * FROM department", function (err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function () {
            let choicesArray = [];
            for (let i = 0; i < results.length; i++) {
              choicesArray.push(results[i].name);
            }
            return choicesArray;
          },
          messages: "Which department do you want to Delete?",
        },
      ])
      .then(function (answer) {
        connection.query(
          "DELETE FROM department WHERE ?",
          [
            {
              name: answer.choice,
            },
          ],
          function (err) {
            if (err) throw err;
            console.log("You have successfully Deleted a department!");
            // re-prompt the user for if they want to bid or post
            start();
          }
        );
      });
  });
}

function deleteRoles() {
  connection.query("SELECT * FROM role", function (err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function () {
            var choicesArray = [];
            for (var i = 0; i < results.length; i++) {
              choicesArray.push(results[i].title);
            }
            return choicesArray;
          },
          messages: "Which role do you want to Delete?",
        },
      ])
      .then(function (answer) {
        connection.query(
          "DELETE FROM role WHERE ?",
          [
            {
              title: answer.choice,
            },
          ],
          function (err) {
            if (err) throw err;
            console.log("You have successfully Deleted a role!");
            start();
          }
        );
      });
  });
}

function deleteEmployees() {
  connection.query("SELECT * FROM employee", function (err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function () {
            let choicesArray = [];
            for (let i = 0; i < results.length; i++) {
              choicesArray.push(results[i].first_name);
            }
            return choicesArray;
          },
          messages: "Which employee do you want to Delete?",
        },
      ])
      .then(function (answer) {
        connection.query(
          "DELETE FROM employee WHERE ?",
          [
            {
              first_name: answer.choice,
            },
          ],
          function (err) {
            if (err) throw err;
            console.log("You have successfully Deleted an employee!");
            start();
          }
        );
      });
  });
}
