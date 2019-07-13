import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  coords = new EventEmitter<any>();
  constructor() { }
}
