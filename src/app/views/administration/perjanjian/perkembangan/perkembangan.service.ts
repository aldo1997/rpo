import { Injectable } from '@angular/core';

let simpleProducts: string[] = [
  "Tahap Pengerjaan",
  "Masa Pemeliharaan",
  "Masa Sewa",
  "Selesai"
];

@Injectable({
  providedIn: 'root'
})
export class PerkembanganService {
  getSimpleProducts(): string[] {
    return simpleProducts;
}
  
  constructor() { }
}
