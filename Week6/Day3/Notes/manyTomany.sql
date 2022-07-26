-- -------------------------------------------------
-- Many to Many : 
-- An actor can play in many different movies, 
-- a movies can cast a lot of different actors
​
SELECT * FROM movies;
​
--First we delete the unnecessary columns and rows
ALTER TABLE movies DROP COLUMN actor_playing_id;
​
-- Then we create the new table
CREATE TABLE actors_movies (
  actor_id_ref INTEGER NOT NULL REFERENCES actors(actor_id) ON DELETE CASCADE ON UPDATE CASCADE,
  movie_id_ref INTEGER NOT NULL REFERENCES movies(movie_id) ON DELETE CASCADE ON UPDATE CASCADE,
  actor_role VARCHAR(30) NOT NULL,
  is_lead_role BOOLEAN NOT NULL,
  PRIMARY KEY (actor_id_ref, movie_id_ref)
);
​
INSERT into actors_movies(actor_id_ref, movie_id_ref, actor_role, is_lead_role) 
VALUES 
(
	(SELECT actor_id FROM actors where first_name = 'George' AND last_name = 'Clooney'), 
	(SELECT movie_id FROM movies where movie_title = 'Gravity'), 
	'Matt Kowalski', 
	TRUE
),
​
(
	(SELECT actor_id FROM actors where first_name = 'George' AND last_name = 'Clooney' ), 
	(SELECT movie_id FROM movies where movie_title = 'Oceans Eleven'), 
	'Danny Ocean', 
	FALSE
),
​
(
	(SELECT actor_id FROM actors where first_name = 'Matt' AND last_name = 'Damon' ),
	(SELECT movie_id FROM movies where movie_title = 'Oceans Eleven'),
	'Linus Caldwell', 
	FALSE
)
​
SELECT * FROM actors_movies;
​
-- find all the info (actor and movie) where Clooney plays
SELECT first_name, last_name, movie_title, actor_role
FROM actors_movies AS am
INNER JOIN actors ON actors.actor_id = am.actor_id_ref
INNER JOIN movies ON movies.movie_id = am.movie_id_ref
WHERE last_name = 'Clooney';
​
-- find how many movies Clooney plays in
SELECT COUNT(*)
FROM actors_movies AS am
INNER JOIN actors ON actors.actor_id = am.actor_id_ref
INNER JOIN movies ON movies.movie_id = am.movie_id_ref
WHERE last_name = 'Clooney';
​
​
-- get the actors that are not lead role
SELECT first_name, last_name, is_lead_role
FROM actors_movies AS am
INNER JOIN actors ON actors.actor_id = am.actor_id_ref
WHERE is_lead_role = false;