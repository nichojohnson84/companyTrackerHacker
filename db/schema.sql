DROP TABLE IF EXISTS deparment;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
);
	
CREATE TABLE role (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(30) NOT NULL,
	salary DECIMAL(5, 2),
	department_id INT REFERENCES deparment (id),
	CONSTRAINT fk_party
    FOREIGN KEY (department_id)
    REFERENCES deparment(id)
    ON DELETE SET NULL
);
	
CREATE TABLE employee (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	role_id INT REFERENCES role (id),
	manager_id INT REFERENCES employee (id),
	CONSTRAINT uc_department UNIQUE (department_id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
);