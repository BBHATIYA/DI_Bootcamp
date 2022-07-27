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


