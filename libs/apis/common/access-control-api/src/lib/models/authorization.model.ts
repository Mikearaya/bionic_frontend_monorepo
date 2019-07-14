export class AuthorizationModel {
  UserName: string;
  BearerToken: string;
  IsAuthenticated: boolean;
  Claims: ClaimModel[];
}

interface ClaimModel {
  ClaimType: string;
  ClaimValue: string;
}
