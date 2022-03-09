INSERT INTO department (name)
VALUES ("Sales");
	
INSERT INTO department (name)
VALUES ("Accounting");

INSERT INTO department (name)
VALUES ("Marketing");
	
INSERT INTO department (name)
VALUES ("Production");
	
INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 88.34, 1);
	
INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 90.12, 2);
	
INSERT INTO role (title, salary, department_id)
VALUES ("Intern" ,55.68, 2);
	
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tracy", "Ivy", 1, 2);
	
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Macdonald", 2, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Billie", "Blanks", 1, 3);
