--This is inserting the proper data into my tables. First we create the departments
INSERT INTO department (name)
VALUES ("Sales");
	
INSERT INTO department (name)
VALUES ("Accounting");

INSERT INTO department (name)
VALUES ("Marketing");
	
INSERT INTO department (name)
VALUES ("Production");

--Now we create each of the roles with their designated salary and what department they are currently under but this can all be added to once you finish the table	
INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 88.34, 1);
	
INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 90.12, 2);
	
INSERT INTO role (title, salary, department_id)
VALUES ("Intern" ,55.68, 3);

-- Inserting each employee.	
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tracy", "Ivy", 1, 1);
	
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Macdonald", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Billie", "Blanks", 3, 1);