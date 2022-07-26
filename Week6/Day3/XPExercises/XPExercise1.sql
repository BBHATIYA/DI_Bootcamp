-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

-- CREATE DATABASE dvdrental
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- Get a list of all film languages.

-- SELECT * FROM language
-- 1
-- SELECT * FROM film

-- 2
-- SELECT title, film.description, language.name
-- FROM film
-- INNER JOIN language
-- ON film.language_id = language.language_id;

-- SELECT title, description, language.name
-- FROM film
-- LEFT JOIN language
-- ON film.language_id = language.language_id

-- SELECT title, description, language.name
-- FROM film
-- RIGHT JOIN language
-- ON film.language_id = language.language_id

-- 3

-- CREATE TABLE new_film (
--     filmid SERIAL PRIMARY KEY,
--     name VARCHAR(80)
-- )

-- INSERT INTO new_film (name) 
-- VALUES
-- ('Border1'),
-- ('Border2')
-- RETURNING *;


-- CREATE TABLE customer_review(
-- review_id SERIAL PRIMARY KEY NOT NULL,
-- filmid INTEGER REFERENCES new_film (filmid) ON DELETE CASCADE ON UPDATE CASCADE,
-- language_id INTEGER REFERENCES language (language_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- title VARCHAR(50) NOT NULL,
-- score SMALLINT,
-- review_text TEXT,
-- last_update DATE
-- )

-- SELECT * FROM new_film;
-- SELECT * FROM customer_review;


-- 5

-- INSERT INTO customer_review(filmid, language_id, title, score, review_text, last_update)
-- VALUES((SELECT filmid FROM new_film WHERE filmid = 1), 
-- 	  (SELECT language_id FROM language WHERE name = 'English'),
-- 	  'Great!', 10, 'One of the best movies I ever watched!', '2022/01/04');

-- INSERT INTO customer_review(filmid, language_id, title, score, review_text, last_update)
-- VALUES((SELECT filmid FROM new_film WHERE name = 'Border2'), 
-- 	  (SELECT language_id FROM language WHERE name = 'English'),
-- 	  'Good One!', 7, 'The best movies I ever watched!', '2021/04/06');

-- 6

-- DELETE from new_film WHERE name='Border2';

-- SELECT * FROM new_film;

-- The customer review also gets deleted because we put ON DELETE CASCADE!

SELECT * FROM film;