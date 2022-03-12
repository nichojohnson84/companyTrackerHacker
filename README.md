<<<<<<< HEAD
# 12 SQL: Employee Tracker

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Mock-Up

The following video shows an example of the application being used from the command line:

[![A video thumbnail shows the command-line employee management application with a play button overlaying the view.](./Assets/12-sql-homework-video-thumbnail.png)](https://2u-20.wistia.com/medias/2lnle7xnpk)

## Getting Started

You’ll need to use the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to your MySQL database and perform queries, the [Inquirer package](https://www.npmjs.com/package/inquirer) to interact with the user via the command line, and the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

**Important**: You will be committing a file that contains your database credentials. Make sure that your MySQL password is not used for any other personal accounts, because it will be visible on GitHub. In upcoming lessons, you will learn how to better secure this password, or you can start researching npm packages now that could help you.

You might also want to make your queries asynchronous. MySQL2 exposes a `.promise()` function on Connections to upgrade an existing non-Promise connection to use Promises. To learn more and make your queries asynchronous, refer to the [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).

Design the database schema as shown in the following image:

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/12-sql-homework-demo-01.png)

As the image illustrates, your schema should contain the following three tables:

- `department`

  - `id`: `INT PRIMARY KEY`

  - `name`: `VARCHAR(30)` to hold department name

- `role`

  - `id`: `INT PRIMARY KEY`

  - `title`: `VARCHAR(30)` to hold role title

  - `salary`: `DECIMAL` to hold role salary

  - `department_id`: `INT` to hold reference to department role belongs to

- `employee`

  - `id`: `INT PRIMARY KEY`

  - `first_name`: `VARCHAR(30)` to hold employee first name

  - `last_name`: `VARCHAR(30)` to hold employee last name

  - `role_id`: `INT` to hold reference to employee role

  - `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a `seeds.sql` file to pre-populate your database, making the development of individual features much easier.

## Bonus

Try to add some additional functionality to your application, such as the ability to do the following:

- Update employee managers.

- View employees by manager.

- View employees by department.

- Delete departments, roles, and employees.

- View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.

## Review

You are required to submit BOTH of the following for review:

- A walkthrough video demonstrating the functionality of the application.

- The URL of the GitHub repository, with a unique name and a README describing the project.

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

# companyTrackerHacker
=======
# Company Tracker Hacker

This is a program designed for someone to create tables so they can easily see their company structure.  They can add and delte Departments, Roles, and Employees all from the command line.

## Table of Contents
- ["Why did you build this?"](#reason)
- ["Installation"](#installation)
- ["How do you use the program?"](#usage)
- ["License and how to give feedback"](#license)

## Why did you build this?

- This is a great tool to have for any company that wants to keep track of employee's and who they work under and things like their job title and how much they make.

- I learned a lot of valuable information about using mysql and mysql2 to build out tables that you could use in a ton of scenarios where you are trying to keep track of a group and their different aspects.

## Installation and testing

From my repository you will go to companyTrackerHacker and use the code function to copy the repo.  Then just use git clone (paste copied repo) in your command line and push enter. You will also need to install a few programs by using the following commands. "npm i mysql2", "npm i inquirer", and "npm i console.table"  These programs will allow you to use the MySql program to view and edit your tables for your employee database.

## How do you use the program?

When you have loaded the programs you will open the regular git bash from the file companyTrackerHacker and then type "npm start".You will then just use the prompts to view, add, or delete employees, roles, or departments given a variety of options.

![Company add role pic](https://user-images.githubusercontent.com/94770081/158033045-be35dcc1-b166-40ea-a21a-ffe770000d0f.jpg)

![Company tracker pic](https://user-images.githubusercontent.com/94770081/158033051-9b42b5a2-6a39-45dd-bf28-8319172bcceb.jpg)

## Video Tutorial
https://drive.google.com/file/d/1MxUKt7PYFnaRzcICiTMgyUG_ohqPl4if/view

### What language or programs did you use?

mysql (mysql2), inquirer, node.js, jest for any testing, console.table package.  VS CODE and mysql workbench are also great additions to make it easier to view and alter.

### Do you already have future plans for improvements?

I think it would be great to add more to the tables to really be able to know everything you posssibly could about an employee just by looking at the table.  You could add working ours/days. Any special needs or conditions they may have or any other detail that would be valuable for your company files and directory.

### What did you learn while building this?

I learned a lot of valuable information about using mysql and mysql2 to build out tables that you could use in a ton of scenarios where you are trying to keep track of a group and their different aspects.

## License

MIT

## Feedback

- If you want to leave feedback on improvments

- Let me know about any bugs

- You can visit my page on GitHub below that also contains my contact information.

### You can also visit my repo and see some other projects I am workin on.

## Questions
 -[nichojohnson84](https://github.com/nichojohnson84)
>>>>>>> origin
