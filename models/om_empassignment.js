/**
 * Created by root on 5/30/15.
 * create table om_empassignment
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
 */
//todo add the om_empassignment