-- Alter table : Add 2 more columns: salary (integer), nationality (varchar)
ALTER TABLE actors ADD COLUMN salary integer default 0;
ALTER TABLE actors ADD COLUMN nationality varchar(20);
​
--Update
-- 1. Salary of 100000 for actors that have more than 2 oscars
​
UPDATE actors
SET salary=100000
WHERE number_oscars >= 2
RETURNING *
​
-- Salary of 50000 for actors that have less than 2 oscars
​
UPDATE actors
SET salary=50000
WHERE number_oscars < 2
RETURNING *
​
-- Matt Damon won another oscar, change the table accordingly
​
UPDATE actors
SET number_oscars = number_oscars+1
WHERE first_name='Matt' AND last_name='Damon'
RETURNING *
​
-- We are in Hollywood, add to all actors a nationality "American"
​
UPDATE actors
SET nationality = 'American'
RETURNING *
​
-- Change the salary proportionally to their number of oscars, for the 2 first actors (IN clause)
​
UPDATE actors
SET salary = salary*number_oscars
WHERE actor_id IN (1, 2)
RETURNING *
