-- Database: relationships_tables

-- DROP DATABASE IF EXISTS relationships_tables;

-- CREATE DATABASE relationships_tables
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;




-- CREATE TABLE customer (
-- customer_id SERIAL PRIMARY KEY NOT NULL,
-- first_name VARCHAR(30) NOT NULL,
-- last_name VARCHAR(30) NOT NULL
-- )


-- CREATE TABLE customer_profile (
--   id SERIAL PRIMARY KEY,
--   isLoggedIn BOOLEAN DEFAULT 'false' NOT NULL,
--   profile_id INTEGER UNIQUE REFERENCES customer (customer_id)
-- )


-- 2

-- SELECT * FROM customer;
-- SELECT * FROM customer_profile;

-- INSERT INTO customer(first_name, last_name)
-- VALUES
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive');

-- 3

-- INSERT INTO customer_profile(isLoggedIn, profile_id)
-- VALUES
-- ('true', (SELECT customer_id FROM customer WHERE first_name ='John'));

-- INSERT INTO customer_profile(profile_id)
-- VALUES
-- ((SELECT customer_id FROM customer WHERE first_name ='Jerome'));

-- 4

-- SELECT first_name 
-- from customer
-- INNER JOIN customer_profile
-- ON customer_id = id
-- WHERE isLoggedin = 'true';

-- SELECT first_name, isLoggedin
-- FROM customer
-- LEFT JOIN customer_profile
-- ON customer_id = id;

-- SELECT COUNT(*)
-- FROM customer
-- LEFT OUTER JOIN customer_profile
-- ON customer_id = id
-- WHERE isLoggedin ='false';



-- Part II:

-- 1

-- CREATE TABLE book(
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     author VARCHAR (255) NOT NULL
-- )


-- 2

-- INSERT INTO book (title , author) 
-- VALUES ('Alice In Wonderland' , 'Lewis Carroll'),
-- ('Harry Potter' , 'J.K Rowling'),
-- ('To kill a mockingbird' , 'Harper Lee');

-- SELECT * FROM book;

-- 3

-- CREATE TABLE student(
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(80) NOT NULL UNIQUE,
--     age SMALLINT CHECK ( age <= 15 )
-- )

-- 4


-- INSERT INTO student (name , age) 
-- VALUES ('John', 12), 
--        ('Lera',11),
--        ('Patrick' , 10), 
--        ('Bob',14);

-- SELECT * FROM student;

-- 5


-- CREATE TABLE Library(
--     book_fk_id INTEGER REFERENCES book(id) ON DELETE CASCADE ON UPDATE CASCADE,
--     student_fk_id INTEGER REFERENCES student(id) ON DELETE CASCADE ON UPDATE CASCADE,
--     borrowed_date date,
--     PRIMARY KEY (book_fk_id, student_fk_id)
-- )

-- SELECT * FROM Library;

-- 6


-- INSERT INTO library (book_fk_id, student_fk_id , borrowed_date)
-- VALUES
-- ((SELECT id FROM book WHERE title = 'Alice In Wonderland'), 
--  (SELECT id FROM student WHERE name ='John'),'2022/01/15');

-- INSERT INTO library (book_fk_id, student_fk_id , borrowed_date)
-- VALUES
-- ((SELECT id FROM book WHERE title = 'Harry Potter'), 
--  (SELECT id FROM student WHERE name ='Lera'),'2021/03/03'),
--  ((SELECT id FROM book WHERE title = 'To kill a mockingbird'), 
--  (SELECT id FROM student WHERE name ='Patrick'),'2021/05/23'),
--  ((SELECT id FROM book WHERE title = 'Alice In Wonderland'), 
--  (SELECT id FROM student WHERE name ='Bob'),'2021/08/12');



-- SELECT * FROM library;



--

-- SELECT title , author FROM library
-- INNER JOIN book
-- ON book.id = library.book_fk_id ;
--
-- SELECT AVG(age) FROM library
-- INNER JOIN book
-- ON book_fk_id = library.book_fk_id
-- INNER JOIN student
-- ON student_fk_id = library.student_fk_id
-- WHERE book.title = 'Alice in the Wonderland';
--

-- DELETE FROM student WHERE name ='Lera';
-- SELECT * FROM library;
--All of the data related to Bob was deleted from the library table



--*************************************************Lise solution

-- many to many

CREATE TABLE Book(
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL
);
​
INSERT INTO Book (TITLE, author)
VALUES ('Alice In Wonderland', 'Lewis Carroll'),
       ('Harry Potter', 'J.K Rowling'),
       ('To kill a mockingbird', 'Harper Lee');
​
​
​
CREATE TABLE student (
    student_id SERIAL PRIMARY KEY, 
    student_name VARCHAR(100) NOT NULL UNIQUE, 
    age SMALLINT CHECK(age <= 15)
);
​
INSERT INTO student (student_name, age)
VALUES ('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);
​
​
CREATE TABLE Library (
    book_id_ref INTEGER REFERENCES book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_id_ref INTEGER REFERENCES student (student_id)ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY(book_id_ref,student_id_ref)
);
​
​
INSERT INTO Library (book_id_ref,student_id_ref,borrowed_date)
VALUES ((SELECT book_id FROM Book WHERE title='Alice In Wonderland'),
        (SELECT student_id FROM student WHERE student_name='John'),
        '2022-02-15'),
        ((SELECT book_id FROM Book WHERE title='To kill a mockingbird'),
        (SELECT student_id FROM student WHERE student_name='Bob'),
        '2021-03-03'),
        ((SELECT book_id FROM Book WHERE title='Alice In Wonderland'),
        (SELECT student_id FROM student WHERE student_name='Lera'),
        '2021-05-21'),
        ((SELECT book_id FROM Book WHERE title='Harry Potter'),
        (SELECT student_id FROM student WHERE student_name='Bob'),
        '2021-08-12');
​
​
​
SELECT * from library
​
​
-- Display the data
-- Select all the columns from the junction table
​
SELECT * FROM library
​
​
-- Select the name of the student and the title of the borrowed books
​
​
SELECT title, student_name
FROM library
INNER JOIN book ON book_id=book_id_ref
INNER JOIN student ON student_id=student_id_ref;
​
-- Select the average age of the children, that borrowed the book Alice in Wonderland
​
SELECT ROUND(AVG(age),1)
FROM library
INNER JOIN book ON book_id=book_id_ref
INNER JOIN student ON student_id=student_id_ref
WHERE title='Alice In Wonderland';
​
-- Select the average age of the children and title per book borrowed
​
SELECT title, ROUND(AVG(age),1) as avg_age
FROM library
INNER JOIN book ON book_id=book_id_ref
INNER JOIN student ON student_id=student_id_ref
GROUP BY title
ORDER BY avg_age ASC;
​
-- Delete a student from the Student table, what happened in the junction table ?
​
DELETE FROM student WHERE student_name='Bob';
-- (SEE THE RESULT IN EXCEL)

-- ****************************************************************one ot one *****************************

CREATE TABLE customer (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL
);
​
CREATE TABLE profile (
    profile_id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id_ref INTEGER UNIQUE REFERENCES customer (customer_id)
);
​
​
INSERT INTO customer (first_name, last_name)
VALUES ('John','Doe'),('Jerome','Lalu'),('Lea', 'Rive');
​
-- use the DEFAULT contraint for FALSE
INSERT INTO profile (isLoggedIn, customer_id_ref)
VALUES (TRUE, (SELECT customer_id FROM customer WHERE first_name='John')),
       (DEFAULT, (SELECT customer_id FROM customer WHERE first_name='Jerome'));
​
​
-- Use the relevant types of Joins to display:
​
-- The first_name of the LoggedIn customers
​
-- DON'T NEED TO CHECK IF isLoggedIn TRUE BECAUSE THE WHERE CLAUSE CHECKS
-- AUTOMATICALLY IF THE VALUE OF THE COLUMN IF TRUE
SELECT first_name
FROM customer
INNER JOIN profile
ON customer_id=customer_id_ref
WHERE isLoggedIn;
​
-- All the customers first_name and isLoggedIn columns - 
-- even the customers those who don’t have a profile.
​
SELECT first_name, isLoggedIn
FROM customer
LEFT JOIN profile
ON customer_id=customer_id_ref;
​
-- SYNTAX
-- SELECT columnnames
-- FROM table1
-- INNER JOIN table2
​
-- only the false
SELECT COUNT(*) FROM profile
WHERE isLoggedIn=FALSE;
​
​
-- false and null
SELECT COUNT(*)
FROM customer
LEFT JOIN profile
ON customer_id=customer_id_ref
WHERE isLoggedIn=FALSE or isLoggedIn IS NULL;
​
SELECT COUNT(*)
FROM customer
LEFT JOIN profile
ON customer_id=customer_id_ref
WHERE isLoggedIn<>TRUE OR isLoggedIn IS NULL;
​
SELECT COUNT(*)
FROM customer
LEFT JOIN profile
ON customer_id=customer_id_ref
WHERE isLoggedIn!=TRUE OR isLoggedIn IS NULL;
​
-- NULL IS CONSIDERED UNKNOWN
-- THE CONTRARY OF TRUE IS FALSE
SELECT COUNT(*)
FROM customer
LEFT JOIN profile
ON customer_id=customer_id_ref
WHERE isLoggedIn!=TRUE;
​
-- only one
SELECT COUNT(*)
FROM customer
LEFT JOIN profile
ON customer_id=customer_id_ref
WHERE isLoggedIn IN (FALSE,NULL);
​
-- in means 
-- isLoggedIn=False or isLoggedIn=Null
-- You can't use null values in a where clause using IN
-- because IN applies the standard = operator. This one, of course, fails when comparing NULLs.
​
READ THIS ABOUT NULL AND NOT IN
https://web.archive.org/web/20141229070855/http://www.oraclebin.com/2013/01/beware-of-nulls.html
