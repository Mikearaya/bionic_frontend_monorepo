import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SystemUserApiService } from './system-user-api.service';
import { UserOptionsService } from './user-options.service';
import { SystemsRoles } from '@bionic/apis/common/system-roles-api';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<UserModuleOptions>(
  'forRoot() UserService configuration.'
);
@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [SystemUserApiService]
})
export class SystemUsersApiModule {
  static forRoot(options?: UserModuleOptions): ModuleWithProviders {
    return {
      ngModule: SystemUsersApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: UserOptionsService,
          useFactory: provideUserModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface UserModuleOptions {
  apiUrl?: string;
}

export function provideUserModuleOptions(
  options?: UserModuleOptions
): UserOptionsService {
  const roleServiceOptions = new UserOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      roleServiceOptions.apiUrl = options.apiUrl;
    }
  }

  return roleServiceOptions;
}
