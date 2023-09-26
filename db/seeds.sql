INSERT INTO department (name)
VALUES ('Finance'),
('Human Resources'),
('Administration'),
('Marketing'),
('Sales'),
('IT'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES ('Accountant', 80000, 1),
('HR Representative', 80000, 2),
('Front Desk', 80000, 3),
('Social Media Strategist', 80000, 4),
('Sales Representative', 80000, 5),
('Cyber Security', 80000, 6),
('Attorney', 80000, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Malia', 'Cho', 1, NULL),
('Chan', 'Nguyen', 2, 1),
('Allie', 'Deaver', 3, 1),
('Vanna', 'Luciano', 4, 1),
('Linda', 'Vuong', 5, NULL),
('Nikki', 'Campagna', 6, NULL),
('Megan', 'Umali', 7, NULL);





