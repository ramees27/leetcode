/* Write your T-SQL query statement below */
select a.name Employee
from Employee a
inner join Employee b on a.managerId = b.id and b.salary < a.salary