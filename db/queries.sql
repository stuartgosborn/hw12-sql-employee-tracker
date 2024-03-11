SELECT * FROM departments;

SELECT roles.id, roles.title, roles.salary, departments.name AS department 
FROM roles LEFT 
JOIN departments ON roles.department_id = departments.id;

SELECT employees.id, employees.first_name, employees.last_name, roles.title AS role, roles.salary, departments.name AS department 
FROM employees LEFT 
JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id;

INSERT INTO departments 
SET name = "Here So I Won't Get Fined"; 