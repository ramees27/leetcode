


/* Write your T-SQL query statement below */
SELECT P.product_name,SUM(unit) as unit 
FROM Products AS P JOIN Orders AS O 
ON P.product_id = O.product_id 
WHERE order_date >= '2020-02-01' AND order_date <='2020-02-29'
GROUP BY P.product_id, P.product_name
HAVING SUM(unit) >= 100