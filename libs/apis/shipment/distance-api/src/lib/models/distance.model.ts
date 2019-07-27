export interface DistanceModel {
  Id?: number;
  FromLocation: number;
  ToLocation: number;
  Cost: number;
}

export class DistancetDtoModel {
  Distances: DistanceModel[] = [];
}
