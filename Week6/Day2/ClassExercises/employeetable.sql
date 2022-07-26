-- Database: Employee_table

-- DROP DATABASE IF EXISTS "Employee_table";

-- CREATE DATABASE "Employee_table"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;



-- CREATE SEQUENCE mysequence
-- INCREMENT 10
-- START 10;

-- CREATE TABLE DEPARTMENT
-- (
--  DEPTCODE   INTEGER NOT NULL DEFAULT nextval('mysequence') PRIMARY KEY,
--  DeptName   CHAR(30),
--  LOCATION   VARCHAR(33) UNIQUE
-- );

-- CREATE TABLE EMPLOYEE
-- (
--  EmpCode      INTEGER PRIMARY KEY,
--  EmpFName     VARCHAR(15) NOT NULL,
--  EmpLName     VARCHAR(15) NOT NULL,
--  Job          VARCHAR(45),
--  Manager      CHAR(4),
--  HireDate     DATE,
--  Salary       DECIMAL DEFAULT 0,
--  Commission   INTEGER,
--  Department_code     INTEGER REFERENCES DEPARTMENT (DEPTCODE)
-- );


-- SELECT * FROM DEPARTMENT
-- SELECT * FROM EMPLOYEE

-- INSERT INTO DEPARTMENT (deptname,location)
-- VALUES 
-- ('FINANCE', 'EDINBURGH'),
-- ('SOFTWARE','PADDINGTON'),
-- ('SALES', 'MAIDSTONE'),
-- ('MARKETING', 'DARLINGTON'),
-- ('ADMIN', 'BIRMINGHAM');


-- INSERT INTO EMPLOYEE (empcode,empfname,emplname,job,manager,hireDate,salary,commission,department_code)
-- VALUES (9369, 'TONY', 'STARK', 'SOFTWARE ENGINEER', 7902, '1980-12-17', 2800,0,20),
--        (9499, 'TIM', 'ADOLF', 'SALESMAN', 7698, '1981-02-20', 1600, 300,30),    
--        (9566, 'KIM', 'JARVIS', 'MANAGER', 7839, '1981-04-02', 3570,0,20),
--        (9654, 'SAM', 'MILES', 'SALESMAN', 7698, '1981-09-28', 1250, 1400, 30),
--        (9782, 'KEVIN', 'HILL', 'MANAGER', 7839, '1981-06-09', 2940,0,10),
--        (9788, 'CONNIE', 'SMITH', 'ANALYST', 7566, '1982-12-09', 3000,0,20),
--        (9839, 'ALFRED', 'KINSLEY', 'PRESIDENT', 7566, '1981-11-17', 5000,0, 10),
--        (9844, 'PAUL', 'TIMOTHY', 'SALESMAN', 7698, '1981-09-08', 1500,0,30),
--        (9876, 'JOHN', 'ASGHAR', 'SOFTWARE ENGINEER', 7788, '1983-01-12',3100,0,20),
--        (9900, 'ROSE', 'SUMMERS', 'TECHNICAL LEAD', 7698, '1981-12-03', 2950,0, 20),
--        (9902, 'ANDREW', 'FAULKNER', 'ANALYST', 7566, '1981-12-03', 3000,0, 10),
--        (9934, 'KAREN', 'MATTHEWS', 'SOFTWARE ENGINEER', 7782, '1982-01-23', 3300,0,20),
--        (9591, 'WENDY', 'SHAWN', 'SALESMAN', 7698, '1981-02-22', 500,0,30),
--        (9698, 'BELLA', 'SWAN', 'MANAGER', 7839, '1981-05-01', 3420, 0,30),
--        (9777, 'MADII', 'HIMBURY', 'ANALYST', 7839, '1981-05-01', 2000, 200, NULL),
--        (9860, 'ATHENA', 'WILSON', 'ANALYST', 7839, '1992-06-21', 7000, 100, 50),
--        (9861, 'JENNIFER', 'HUETTE', 'ANALYST', 7839, '1996-07-01', 5000, 100, 50);
 
-- SELECT * FROM DEPARTMENT
-- SELECT * FROM EMPLOYEE

-- 1. How many employees are in dept 10.

-- 2. How many employees are analyst in dept 10.
-- SELECT COUNT(*) 
-- FROM DEPARTMENT
-- INNER JOIN EMPLOYEE
-- ON DEPTCODE = department_code

-- 3. Display the names of each employees, their job and dept location
-- SELECT empfname, emplname, job, location 
-- FROM DEPARTMENT
-- INNER JOIN EMPLOYEE
-- ON DEPTCODE = department_code


-- 4. Find the avg salary of the software engineers
-- SELECT AVG(salary) 
-- FROM DEPARTMENT
-- INNER JOIN EMPLOYEE
-- ON DEPTCODE = department_code
-- WHERE job = 'SOFTWARE ENGINEER';


-- 5. Which join should we use to display the employee 9777 even if he has no deptcode?
-- SELECT * 
-- FROM DEPARTMENT
-- LEFT OUTER JOIN EMPLOYEE 
-- ON DEPTCODE = department_code;

-- SELECT * FROM EMPLOYEE

-- -- 6. Create a query that displays EMPFNAME,
-- EMPLNAME, Department_code, DEPTNAME, 
-- LOCATION from EMPLOYEE, and DEPARTMENT tables. 
-- Make sure the results are in the ascending order based on the
-- EMPFNAME and LOCATION of the department.

-- SELECT empfname, emplname, department_code, deptname, location 
-- FROM DEPARTMENT
-- INNER JOIN EMPLOYEE
-- ON DEPTCODE = department_code
-- ORDER BY
-- 	empfname ASC, location ASC;


-- 7.  Display EMPFNAME and "TOTAL SALARY" for each employee (commission and salary)
-- SELECT empfname,  (salary+commission)AS TotalSalary
-- FROM DEPARTMENT
-- INNER JOIN EMPLOYEE
-- ON DEPTCODE = department_code;

-- 8. Display MAX SALARY from the EMPLOYEE table.
-- SELECT MAX(salary+commission)AS max_salary
-- FROM DEPARTMENT
-- INNER JOIN EMPLOYEE
-- ON DEPTCODE = department_code;




-- **********************Class Solution*******************

-- 1. How many employees are in dept 10.
SELECT COUNT(*) FROM employee WHERE departmentcode=10;
​
-- 16 employees : one employee doesnt work in a dept
SELECT COUNT(departmentcode) FROM employee;
-- 17 employees
SELECT COUNT(*) FROM employee; 
​
-- 2. How many employees are analyst in dept 10.
SELECT COUNT(*) FROM employee WHERE departmentcode=10 AND job ILIKE '%analyst%';
​
-- 3. Display the names of each employees, their job and dept location
-- INNER JOIN to join several tables depending on their relationship
-- foreign key of one table references the primary key in another table
SELECT empfname, job,department.location
FROM employee
INNER JOIN department
ON employee.departmentcode=department.deptcode;
​
-- 4. Find the avg salary of the software engineers
SELECT ROUND(AVG(salary),2) FROM employee WHERE job ILIKE '%software%';
​
-- 5. Which join should we use to display the employee 9777 even if he has no deptcode?
SELECT EMPFNAME, deptcode
FROM employee
LEFT JOIN department
ON employee.departmentcode=department.deptcode;
​
-- 6. Create a query that displays EMPFNAME, EMPLNAME, Department_code, DEPTNAME, 
-- LOCATION from EMPLOYEE, and DEPARTMENT tables. 
-- Make sure the results are in the ascending order based on the EMPFNAME and LOCATION of the department.
SELECT EMPFNAME, EMPLNAME, departmentcode, DEPTNAME, department.LOCATION
FROM employee
INNER JOIN department
ON employee.departmentcode=department.deptcode
ORDER BY EMPFNAME, department.LOCATION ASC;
​
​
-- 7.  Display EMPFNAME and "TOTAL SALARY" for each employee (commission and salary)
SELECT empfname, (salary+commission) as total FROM employee;
​
SELECT empfname, SUM(salary+commission) as total FROM employee
GROUP BY empfname;
​
-- 8. Display MAX SALARY from the EMPLOYEE table.
SELECT MAX(salary) from employee;