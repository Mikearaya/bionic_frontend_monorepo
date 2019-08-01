import { Injectable } from '@angular/core';

import { SystemsRoles } from './models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleOptionsService {
  ROLES: SystemsRoles[] = [];
  apiUrl = 'system-roles';
  constructor() {}
}
