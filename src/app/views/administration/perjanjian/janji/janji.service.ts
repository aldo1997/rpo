import { Injectable } from '@angular/core';

let simpleProducts: string[] = [
  "Ada",
  "Belum Ada"
];

@Injectable({
  providedIn: 'root'
})
export class JanjiService {
  getSimpleProducts(): string[] {
    return simpleProducts;
}

  constructor() { }
}
