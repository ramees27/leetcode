/* Write your T-SQL query statement below */
select 
(select distinct salary
from Employee
order by salary DESC
offset 1 rows fetch next 1 rows only)
as SecondHighestSalary