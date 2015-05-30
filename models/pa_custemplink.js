/**
 * Created by root on 5/30/15.
 * create table pa_custemplink
 (
 LinkID               int not null auto_increment,
 EmpID                int not null,
 TenantCode           varchar(8),
 EntryLinkage         varchar(128),
 StartDate            date,
 EndDate              date,
 CreateTime           datetime,
 Creator              varchar(40),
 ModifyTime           datetime,
 Modifier             varchar(40),
 primary key (LinkID)
 );
 */
//todo: add the custemplink