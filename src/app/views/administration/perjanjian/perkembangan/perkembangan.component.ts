import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn} from '@angular/forms';
import { DxPopupModule, DxButtonModule, DxTemplateModule } from 'devextreme-angular';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {PerkembanganService} from './perkembangan.service';

@Component({
  selector: 'app-perkembangan',
  templateUrl: './perkembangan.component.html',
  styleUrls: ['./perkembangan.component.scss'],
  providers: [PerkembanganService]
  
})
export class PerkembanganComponent implements OnInit {
  items = new Array(1);
  tampil="";
  isi = "";
  status ="";
  popupVisible = false;
  confVisible = false;
  isSave = false;
  simpleProducts: string[];
  text="";

  constructor(service: PerkembanganService) {
    this.simpleProducts = service.getSimpleProducts();
  }
  updateValue(e){
    this.text=e.target.value;
    // console.log(e.target.value);
    this.tampil = this.status + ' ' + this.text;
    console.log(this.tampil)
  }

  dateBox_valueChanged(e){
    // console.log(e.value);
    this.status = e.value;
    
  }
  
  showInfo() {
    this.popupVisible = true;
}
note(e){
    this.confVisible = true;
     this.isSave = false;
}
  ngOnInit() {
  }

  tes(){
    this.items.push('1');
  }

}
