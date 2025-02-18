/* Write your T-SQL query statement below */
Select
name, sum(amount) as balance
from Users
Join Transactions on Users.account = Transactions.account
group by name
having SUM(amount) > 10000