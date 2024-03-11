SELECT * FROM departments;

INSERT INTO departments (name)
VALUES ('Finance'),
       ('Marketing'),
       ('Operations'),
       ('Admin');

SELECT * FROM roles;

INSERT INTO roles(title, salary, department_id)
VALUES ('CEO', 150000, 4),
       ('Executive Assistant', 50000, 4),
       ('CFO', 100000, 1),
       ('CMO', 100000, 2),
       ('COO', 100000, 3);

SELECT * FROM employees;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Stuart', 'Dillinger', 1, NULL),
       ('Sarah', 'Lancaster', 2, 1),
       ('Bob', 'Bankmanfried', 3, 1),
       ('Tracy', 'Bryers', 4, 1),
       ('Jeff', 'Tinsberry', 5, 1);