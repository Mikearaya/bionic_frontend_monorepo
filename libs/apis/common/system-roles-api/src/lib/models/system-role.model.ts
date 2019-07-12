import { RoleClaimModel } from './system-role-claims.model';

export class SystemRoleModel {
  Id?: string;
  Name: string;
  Claims: RoleClaimModel[] = [];
}
