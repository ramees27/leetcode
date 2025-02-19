/* Write your T-SQL query statement below */
select
isnull(e.employee_id, s.employee_id) as employee_id
from
employees e full outer join salaries s on e.employee_id=s.employee_id
where e.name IS NULL or s.salary is null
order by isnull(e.employee_id, s.employee_id) asc