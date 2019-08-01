import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SystemRoleApiService } from './system-role-api.service';
import { RoleOptionsService } from './role-options.service';
import { SystemRoleModel } from './models/system-role.model';
import { SystemsRoles } from './models/role.model';

// NOTE: This value has to be exported otherwise the AoT compiler won't see it.
export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<RoleModuleOptions>(
  'forRoot() RoleService configuration.'
);

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [SystemRoleApiService]
})
export class SystemRolesApiModule {
  static forRoot(options?: RoleModuleOptions): ModuleWithProviders {
    return {
      ngModule: SystemRolesApiModule,
      providers: [
        // In order to translate the raw, optional OPTIONS argument into an
        // instance of the MyServiceOptions TYPE, we have to first provide it as
        // an injectable so that we can inject it into our FACTORY FUNCTION.
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options }, // Once we've provided the OPTIONS as an injectable, we can use a FACTORY
        // FUNCTION to then take that raw configuration object and use it to
        // configure an instance of the MyServiceOptions TYPE (which will be
        // implicitly consumed by the MyService constructor).
        {
          provide: RoleOptionsService,
          useFactory: provideRoleModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };

    // NOTE: We don't have to explicitly provide the MyService class here
    // since it will automatically be picked-up using the "providedIn"
    // Injectable() meta-data.
  }
}

export interface RoleModuleOptions {
  ROLES: SystemsRoles[];
  apiUrl?: string;
}

export function provideRoleModuleOptions(
  options?: RoleModuleOptions
): RoleOptionsService {
  const roleServiceOptions = new RoleOptionsService();

  // If the optional options were provided via the .forRoot() static method, then apply
  // them to the roleServiceOptions Type provider.
  if (options) {
    if (typeof options.ROLES === 'object') {
      roleServiceOptions.ROLES = options.ROLES;
    }
    roleServiceOptions.ROLES = options.ROLES;

    if (typeof options.apiUrl === 'string') {
      roleServiceOptions.apiUrl = options.apiUrl;
    }
  }

  return roleServiceOptions;
}
