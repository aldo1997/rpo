import { Component, OnInit } from '@angular/core';
import {JanjiService} from './janji.service';

@Component({
  selector: 'app-janji',
  templateUrl: './janji.component.html',
  styleUrls: ['./janji.component.scss'],
  providers: [JanjiService]
})
export class JanjiComponent implements OnInit {
  items = new Array(1);
  isi='';
  tampil='';
  popupVisible = false;
  isi1='';
  tampil1='';
  simpleProducts: string[];


  constructor(service: JanjiService) { 
    this.simpleProducts = service.getSimpleProducts();
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
tambah(){
  this.items.push('1');
}
  ngOnInit() {
  }

}
