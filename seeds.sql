INSERT INTO department (dep_name)
VALUES  ("Sales"),
        ("Legal"),
        ("Finance"),
        ("Engineering");

INSERT INTO roles (title, department_id,salary)
VALUES  ("Sales Lead", 1,100000),
        ("Salesperson", 1, 80000),
        ("Lead Engineer", 4, 150000),
        ("Software Engineer", 4, 120000),
        ("Account Manager", 3, 160000),
        ("Accountant", 3,125000),
        ("Legal Team Lead", 2, 250000),
        ("Lawyer", 2, 190000);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES  ("John", "Doe", 1, NULL),
        ("Mike", "Chan", 2, 1),
        ("Ashley", "Rodriguez", 3, NULL),
        ("Kevin", "Tupik", 4, 3),
        ("Kunal", "Singh", 5, NULL),
        ("Malia", "Brown", 6, 5),
        ("Sarah", "Lourd", 7, NULL),
        ("Tom", "Allen", 8, 7);