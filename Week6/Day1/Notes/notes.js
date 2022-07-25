// -- CREATE TABLE actors(
// --  actor_id SERIAL PRIMARY KEY,
// --  first_name VARCHAR (20) NOT NULL,
// --  last_name VARCHAR (25) NOT NULL,
// --  date_birth DATE NOT NULL,
// --  number_oscars SMALLINT NOT NULL
// -- )

// -- SELECT first_name, last_name FROM actors;
// -- SELECT * FROM actors;

// --
// -- SELECTING
// --

// -- SELECT * FROM actors;

// --
// -- INSERT
// -- The INSERT statement is used to populate a table with rows:
// --

// -- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
// -- VALUES('Matt','Damon','1970-10-08',5);

// -- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
// -- VALUES('George','Clooney','1961-05-06',2);

// -- SELECT first_name, last_name, number_oscars FROM actors;
// -- show all the columns
// -- SELECT * FROM actors;

// --
// -- SELECTING
// --

// -- SELECT first_name, last_name FROM actors;

// -- WHERE
// -- A query can be "qualified" by adding a WHERE clause that specifies which rows are wanted.
// -- The WHERE clause contains a Boolean (truth value) expression, and only rows for which the Boolean expression
// -- is true are returned. The usual Boolean operators (AND, OR, and NOT) are allowed in the qualification.

// -- show both actors
// -- SELECT first_name, last_name FROM actors WHERE number_oscars >= 2;

// -- SELECT first_name, last_name, number_oscars FROM actors WHERE number_oscars>2;
// -- SELECT first_name, last_name, number_oscars FROM actors WHERE actor_id=1;
// -- SELECT first_name, last_name, number_oscars FROM actors WHERE date_birth >= '1961-05-05';

// -- show george clooney
// -- SELECT first_name, last_name FROM actors WHERE number_oscars >= 2 AND first_name='George';

// -- show both actor
// -- SELECT first_name, last_name FROM actors WHERE number_oscars >= 2 OR first_name='George';

// -- Order
// -- select the oldest actor
// SELECT upper(last_name), EXTRACT(YEAR from age(date_birth))
// FROM actors
// ORDER BY age(date_birth) DESC
// LIMIT 1;

// -- find the actors from highest number of oscors to lowest
// SELECT * FROM actors WHERE date_birth >= '1960-01-01' ORDER BY number_oscars DESC;

// -- -- Like
// -- where last_name ends with y
// SELECT first_name FROM actors WHERE last_name LIKE '%y'

// -- where first_name starts with g - case insensitive
// SELECT first_name, last_name FROM actors WHERE first_name ILIKE 'g%';

// SELECT * FROM actors ORDER BY first_name ASC;
// SELECT * FROM actors ORDER BY first_name DESC;
