import { Injectable } from '@angular/core';
let Status: string[] = [
  "Menggunakan DJPT",
  "Tidak menggunakan DJPT"
];

@Injectable({
  providedIn: 'root'
})
export class PembayaranService {
  getStatus(): string[] {
  return Status;
}

  constructor() { }
}
