/* Write your T-SQL query statement below */
UPDATE SALARY
SET sex=CASE 
WHEN sex='m' THEN 'f'
WHEN sex='f' THEN 'm'
END;
             
  