export class LocationModelDto {
  Locations: LocationModel[] = [];
  DeletedIds?: number[] = [];
}

export interface LocationModel {
  Id?: number;
  IsLocal: number;
  LocationName: string;
  Country: string;
}
