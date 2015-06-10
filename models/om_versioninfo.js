/**
 * Created by root on 6/10/15.
 */
/*
create table om_组织版本
(
    OrgStructurePlanID   int not null,
    TenantCode           varchar(8),
    CustID               varchar(8),
    PlanVersion          varchar(8),
    StructurePlanName    varchar(64),
    Description          varchar(128),
    Status               varchar(8),
    StatusChangeDate     date,
    CreateTime           datetime,
    Creator              varchar(40),
    ModifyTime           datetime,
    Modifier             varchar(40),
    primary key (OrgStructurePlanID)
);

alter table om_组织版本 add constraint FK_Reference_1 foreign key ()
references sys_租户信息 on delete restrict on update restrict;
*/
