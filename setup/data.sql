insert into sys_personbasicinfo
(LastName,FirstName,PerName,PhoneNum,PersonPass,CreateTime,Creator,ModifyTime,Modifier)
values('John','Deo','Deo John','13512345678','foobar','2015-02-01','system','2015-02-01','system');
insert into pa_custemployee
(TenantCode,startdate,enddate,lastname,firstname,personid,createtime,creator,modifytime,modifier)
values('T01','2015-02-01','2099-12-31','John','Deo',1,'2015-02-01','system','2015-02-01','system');


insert into sys_personbasicinfo
(LastName,FirstName,PerName,PhoneNum,PersonPass,CreateTime,Creator,ModifyTime,Modifier)
values('Smith','Sam','Sam Smith','13712345678','passw','2015-02-01','system','2015-02-01','system');
insert into pa_custemployee
(TenantCode,startdate,enddate,lastname,firstname,personid,createtime,creator,modifytime,modifier)
values('T01','2015-02-01','2099-12-31','Smith','Sam',2,'2015-02-01','system','2015-02-01','system');