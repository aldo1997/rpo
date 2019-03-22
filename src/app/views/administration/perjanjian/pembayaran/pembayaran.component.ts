import { Component, OnInit } from '@angular/core';
import {PembayaranService} from './pembayaran.service';

@Component({
  selector: 'app-pembayaran',
  templateUrl: './pembayaran.component.html',
  styleUrls: ['./pembayaran.component.scss'],
  providers: [PembayaranService]
})
export class PembayaranComponent implements OnInit {
  popupVisible = false;
  isi='';
  tampil='';
  isi1='';
  tampil1='';
  Status: string[];

  constructor(service: PembayaranService) {
    this.Status = service.getStatus();
   }
  upload(e){
    this.isi = e.value;
    this.tampil = this.isi;
    console.log(this.isi);
  }
  upload1(e){
    this.isi1 = e.value;
    this.tampil1 = this.isi1;
    console.log(this.isi1);
  }

  showInfo() {
    this.popupVisible = true;
  } 
  
  ngOnInit() {
  }

}
