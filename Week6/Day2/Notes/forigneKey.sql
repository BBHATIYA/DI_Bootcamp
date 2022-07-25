-- Foreign Key
-- an actor can play in many movies
CREATE TABLE movies(
movie_id SERIAL PRIMARY KEY,
movie_title VARCHAR (50) NOT NULL,
movie_story TEXT,
actor_playing_id INTEGER REFERENCES actors (actor_id)
);
-- Foreignkey syntax
-- name_column type REFERENCES other_table_name (pk column_name_of_other_table)
-- SELECT * FROM movies;
-- Error
-- ERROR:  insert or update on table "movies_test" violates foreign key constraint 
-- "movies_test_actor_playing_id_fkey"
-- DETAIL:  Key (actor_playing_id)=(10) is not present in table "actors_test".
-- INSERT INTO movies (movie_title, movie_story,actor_playing_id)
-- VALUES('Gravity','Gravity is a 2013 science fiction thriller',10);
-- -- SUBQUERY
INSERT INTO movies (movie_title, movie_story,actor_playing_id)
VALUES('Gravity',
       'Gravity is a 2013 science fiction thriller',
       (SELECT actor_id FROM actors WHERE first_name='George' AND last_name='Clooney'));
INSERT INTO movies (movie_title, movie_story,actor_playing_id)
VALUES('Oceans Eleven',
       'Danny Ocean, wants to pull off the crime of the century, by ripping off three Casinos at the same time,',
       (SELECT actor_id FROM actors WHERE first_name='George' AND last_name='Clooney'));
SELECT first_name, last_name, movie_title
FROM actors
INNER JOIN movies
ON actor_id = actor_playing_id
WHERE movie_title ILIKE '%ocean%'
SELECT movie_title
FROM movies
INNER JOIN actors
ON actor_id = actor_playing_id
WHERE first_name='George' AND last_name='Clooney';