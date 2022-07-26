-- Delete and Update constraint
CREATE TABLE genre (
  genre_id SERIAL PRIMARY KEY,
  genre VARCHAR(30) NOT NULL
);
​
-- if a genre is deleted from the genre table, then the reference in the child record Will be set to null
-- we can also use ON DELETE CASCADE ON UPDATE CASCADE to delete the child record
CREATE TABLE music (
  music_id SERIAL PRIMARY KEY,
  music_name VARCHAR(30) NOT NULL,
  author VARCHAR(30) NOT NULL,
  ref_genre_id INTEGER REFERENCES genre (genre_id) ON DELETE SET NULL ON UPDATE SET NULL
);
​
​
INSERT INTO genre (genre)
VALUES('Jazz')
RETURNING *
​
INSERT INTO music (music_name, author,ref_genre_id)
VALUES
	  ('I Cant Quit You Baby', 'Otis Rush', (SELECT genre_id FROM genre WHERE genre='Jazz')),
	  ('Crossroad Blues', 'Robert Johnson', (SELECT genre_id FROM genre WHERE genre='Jazz'))
RETURNING *
​
-- Successful delete
​
-- I can delete a record in the child table with no problem
DELETE from music WHERE music_name='Crossroad Blues';
​
-- if I dont have the ON DELETE constraintm, then --> Not successful delete
DELETE from genre WHERE genre='Blues';-- Delete and Update constraint
CREATE TABLE genre (
  genre_id SERIAL PRIMARY KEY,
  genre VARCHAR(30) NOT NULL
);
​
-- if a genre is deleted from the genre table, then the reference in the child record Will be set to null
-- we can also use ON DELETE CASCADE ON UPDATE CASCADE to delete the child record
CREATE TABLE music (
  music_id SERIAL PRIMARY KEY,
  music_name VARCHAR(30) NOT NULL,
  author VARCHAR(30) NOT NULL,
  ref_genre_id INTEGER REFERENCES genre (genre_id) ON DELETE SET NULL ON UPDATE SET NULL
);
​
​
INSERT INTO genre (genre)
VALUES('Jazz')
RETURNING *
​
INSERT INTO music (music_name, author,ref_genre_id)
VALUES
	  ('I Cant Quit You Baby', 'Otis Rush', (SELECT genre_id FROM genre WHERE genre='Jazz')),
	  ('Crossroad Blues', 'Robert Johnson', (SELECT genre_id FROM genre WHERE genre='Jazz'))
RETURNING *
​
-- Successful delete
​
-- I can delete a record in the child table with no problem
DELETE from music WHERE music_name='Crossroad Blues';
​
-- if I dont have the ON DELETE constraintm, then --> Not successful delete
DELETE from genre WHERE genre='Blues';