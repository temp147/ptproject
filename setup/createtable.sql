Create table if not exists sys_personbasicinfo(
personid INT(10) not NULL AUTO_INCREMENT,
lastname varchar(16),
firstname varchar(16),
pername varchar(64),
phonenum varchar(16),
password varchar(128),
createtime datetime,
creator varchar(40),
modifytime datetime,
modifier varchar(40),
PRIMARY KEY(personid));

Create table if not exists pa_custemployee(
empassignmentid INT(10) not NULL AUTO_INCREMENT,
startdate date,
enddate date,
lastname varchar(16),
firstname varchar(16),
empname varchar(64),
personid int,
role smallint,
createtime datetime,
creator varchar(40),
modifytime  datetime,
modifier varchar(40),
primary key (empassignmentid));