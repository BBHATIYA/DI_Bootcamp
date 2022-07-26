INSERT INTO actors (first_name, last_name, date_birth, number_oscars, nationality)
VALUES('Angelina', 'Jolie', '1975-06-04', 2, 'American');
INSERT INTO actors (first_name, last_name, date_birth, number_oscars, nationality)
VALUES('Emma', 'Watson', '1990-04-15', 0, 'British');
-- One to One
-- One person has One TZ
-- One TZ belongs to ONLY ONE PERSON
-- One person has One profile
-- One profile belongs to ONLY ONE PERSON
-- One to One :  
-- An actor can own only one car, 
-- and a car belongs to only one actor
-- UNIQUE FK
CREATE TABLE cars (
  car_id SERIAL PRIMARY KEY,
  brand VARCHAR(30) NOT NULL,
  color VARCHAR(30) NOT NULL,
  owner_id INTEGER UNIQUE REFERENCES actors (actor_id)
);
-- SUBQUERIES
INSERT INTO cars (brand, color, owner_id)
VALUES('Renault', 'black',(SELECT actor_id FROM actors WHERE first_name='George' AND last_name='Clooney')),
      ('Mazda', 'red', (SELECT actor_id FROM actors WHERE first_name='Emma' AND last_name='Watson'))
RETURNING *
--ERROR
-- duplicate key value violates unique constraint "cars_test_owner_id_key"
-- DETAIL:  Key (owner_id)=(2) already exists.
-- error duplicate key
INSERT INTO cars (brand, color, owner_id)
VALUES('Jaguar', 'black',(SELECT actor_id FROM actors WHERE first_name='George' AND last_name='Clooney'));
-- add some more cars
INSERT INTO cars (brand, color)
VALUES('Jaguar', 'yellow'),('BMW', 'pink')
RETURNING *
-- Find the car owned by George Clooney
SELECT last_name, brand
FROM cars
INNER JOIN actors
ON actor_id = owner_id
WHERE last_name='Clooney';
-- Find the actors that own a car, and the cars not yet bought
SELECT first_name, brand
FROM actors
RIGHT JOIN cars
ON actor_id = owner_id;