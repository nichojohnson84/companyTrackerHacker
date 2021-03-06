DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;

-- This will create your tables for you after the above statements make sure they are deleted should they already exist.
CREATE TABLE department (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(30) NOT NULL
);
	
CREATE TABLE role (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(30) NOT NULL,
	salary DECIMAL(5, 2),
	department_id INT,
	CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);
	
CREATE TABLE employee (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	role_id INT NOT NULL,
	manager_id INT,
	CONSTRAINT fk_manager FOREIGN Key (manager_id) REFERENCES employee(id) ON DELETE SET NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE
);