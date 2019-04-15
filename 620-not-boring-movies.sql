-- 620. Not Boring Movies
-- https://leetcode.com/problems/not-boring-movies/

-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

-- Write your MySQL query statement below

  SELECT *
    FROM cinema
   WHERE 1 = id % 2
     AND 'boring' <> description
ORDER BY rating DESC

-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=