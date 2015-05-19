drop table if exists sys_personbasicinfo;

/*==============================================================*/
/* Table: sys_personbasicinfo                                   */
/*==============================================================*/
create table sys_personbasicinfo
(
   PersonID             int not null auto_increment,
   LastName             varchar(16),
   FirstName            varchar(16),
   PerName              varchar(64),
   PhoneNum             varchar(16),
   PersonPass           varchar(128),
   CreateTime           datetime,
   Creator              varchar(40),
   ModifyTime           datetime,
   Modifier             varchar(40),
   primary key (PersonID)
);


drop table if exists sys_mobiledeviceinfo;

/*==============================================================*/
/* Table: sys_mobiledeviceinfo                                  */
/*==============================================================*/
create table sys_mobiledeviceinfo
(
   DeviceCode           int not null auto_increment,
   PersonID             int,
   DeviceType           varchar(64),
   SoftVersion          varchar(64),
   CreateTime           datetime,
   Creator              varchar(40),
   ModifyTime           datetime,
   Modifier             varchar(40),
   primary key (DeviceCode)
);

drop table if exists sys_personcontactinfo;

/*==============================================================*/
/* Table: sys_personcontactinfo                                 */
/*==============================================================*/
create table sys_personcontactinfo
(
   PersonID             int not null,
   QQ号码                 varchar(16),
   EmailAddress         varchar(64),
   CreateTime           datetime,
   Creator              varchar(40),
   ModifyTime           datetime,
   Modifier             varchar(40),
   primary key (PersonID)
);

drop table if exists pa_custemployee;
/*==============================================================*/
/* Table: pa_custemployee                                       */
/*==============================================================*/
create table pa_custemployee
(
   EmpID                int not null auto_increment,
   TenantCode           varchar(8),
   StartDate            date,
   EndDate              date,
   LastName             varchar(16),
   FirstName            varchar(16),
   EmpName              varchar(64),
   PersonID             int,
   CreateTime           datetime,
   Creator              varchar(40),
   ModifyTime           datetime,
   Modifier             varchar(40),
   primary key (EmpID)
);


drop table if exists pa_custemplink;

/*==============================================================*/
/* Table: pa_custemplink                                        */
/*==============================================================*/
create table pa_custemplink
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

drop table if exists om_empassignment;

/*==============================================================*/
/* Table: om_empassignment                                      */
/*==============================================================*/
create table om_empassignment
(
   EmpAssignmentID      int not null auto_increment,
   StartDate            date,
   EndDate              date,
   CustID               varchar(8),
   TenantCode           varchar(8),
   EmpID                int,
   OrgUnitID            int,
   BizUnitiD            varchar(64),
   IsMainAssign         char(0),
   IsOrgManager         char(0),
   AssignIndex          smallint,
   IsExpatriate         char(0),
   Status               varchar(16),
   CreateTime           datetime,
   Creator              varchar(40),
   ModifyTime           datetime,
   Modifier             varchar(40),
   primary key (EmpAssignmentID)
);
