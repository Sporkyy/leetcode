# 595 - Big Countries
# https://leetcode.com/problems/big-countries/

# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

# Write your MySQL query statement below

SELECT World.name,
       World.population,
       World.area
  FROM World
 WHERE 3000000 < World.area
    OR 25000000 < World.population