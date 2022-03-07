DROP DATABASE IF EXISTS company_db;
	
	CREATE DATABASE company_db;
	
	USE company_db;
	
	CREATE TABLE department(
	    id INTEGER AUTO_INCREMENT PRIMARY KEY,
	    name VARCHAR(30) NOT NULL,
	);
	
	CREATE TABLE role(
	    id INTEGER AUTO_INCREMENT PRIMARY KEY,
	    title VARCHAR(30) NOT NULL,
	    salary DECIMAL(5, 2),
	    department_id INT REFERENCES deparment (id),
	);
	
	CREATE TABLE employee(
	    id INTEGER AUTO_INCREMENT PRIMARY KEY,
	    first_name VARCHAR(30) NOT NULL,
	    last_name VARCHAR(30) NOT NULL,
	    role_id INT REFERENCES role (id),
	    manager_id INT REFERENCES employee (id),
	);
	
	INSERT INTO department (name)
	VALUES ("sales");
	
	INSERT INTO department (name)
	VALUES ("billing");
	
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