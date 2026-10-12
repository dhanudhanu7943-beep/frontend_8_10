create database record;
use  record;

create table Employee (
    id int primary key,
    empname varchar(50),
    age int,
    salary int,
    city varchar(50),
    emprole varchar(50)
);

insert into Employee (id, empname, age, salary, city, emprole)
values
(1, 'Arun', 25, 30000, 'Chennai', 'Developer'),
(2, 'Bala', 28, 35000, 'Madurai', 'Tester'),
(3, 'Priya', 24, 28000, 'Gundy','Designer'),
(4, 'Karthik', 30, 45000, 'Bangalore', 'Manager'),
(5, 'Divya', 26, 32000, 'Coimbatore', 'Developer'),
(6, 'Ravi', 29, 40000, 'Chennai', 'Team Lead'),
(7, 'Meena', 23, 25000, 'Trichy', 'HR');

select * from Employee;
select empName,salary, city from Employee;
select city='chennai' from Employee;
select* from Employee where city='Chennai';
select * from Employee where salary > 40000;
select * from Employee where age < 28;
select * from Employee where salary >= 40000;
select * from Employee where emprole!='HR';
select * from Employee where emprole = 'Developer' AND city='Chennai';
select * from Employee where city = 'Madurai' OR city='Chennai';
select * from Employee where city IN("Chennai","Madurai","Salem");
select * from Employee where empName LIKE 'p%';
select distinct emprole from Employee ;

