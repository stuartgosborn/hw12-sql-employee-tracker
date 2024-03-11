SELECT * FROM departments;

INSERT INTO departments (name)
VALUES 
       ('Admin'),
       ('Finance'),
       ('Marketing'),
       ('Operations');

SELECT * FROM roles;

INSERT INTO roles(title, salary, department_id)
VALUES ('CEO', 150000, 1),
       ('Executive Assistant', 50000, 1),
       ('CFO', 100000, 2),
       ('CMO', 100000, 3),
       ('COO', 100000, 4);

SELECT * FROM employees;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Stuart', 'Dillinger', 1, NULL),
       ('Sarah', 'Lancaster', 2, 1),
       ('Bob', 'Bankmanfried', 3, 1),
       ('Tracy', 'Bryers', 4, 1),
       ('Jeff', 'Tinsberry', 5, 1);