import { Injectable } from '@angular/core';
import { DefaultLayoutModel } from './models/default-layout.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationOptionsService {
  ROUTES: DefaultLayoutModel[] = [];
  constructor() {}
}
