import { Component, OnInit } from '@angular/core';
import { DxFormModule } from 'devextreme-angular';

@Component({
  selector: 'app-perjanjian',
  templateUrl: './perjanjian.component.html',
  styleUrls: ['./perjanjian.component.scss']
})
export class PerjanjianComponent implements OnInit {
  janji = false;

  constructor() { }

  ngOnInit() {
  }

}
