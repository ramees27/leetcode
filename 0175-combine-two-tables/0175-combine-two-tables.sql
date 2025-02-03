/* Write your T-SQL query statement below */
SELECT firstName,lastName,city,state   
 FROM PERSON LEFT JOIN ADDRESS ON ADDRESS.personId= PERSON.personId;
