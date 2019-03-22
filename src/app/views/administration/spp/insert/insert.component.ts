import { Component, OnInit } from '@angular/core';
import {InsertService} from './insert.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss'],
  providers: [InsertService]
})
export class InsertComponent implements OnInit {
  
  Prioritas: string[];
  TWSPPPlan: string[];
  TWSPPReal: string[];
  NomorSPP: string[];
  StatusSPP: string[];
  Anggaran: string[];
  TahunAnggaran: string[];
  TahunTerbitPO: String[];
  GMPenanggungJawab: string[];
  JenisProgramKerja: string[];
  TWPOPlan: string[];
  TWPOReal: string[];
  Divisi: string[];
  PemilikProgram: string[];
  Kriteria: string[];
  Kendala: string[];
  JenisPengadaan: string[];
  TOR: string[];
  RAB: string[];
  KKO: string[];
  KKF: string[];



  constructor(service: InsertService) {
    this.Prioritas = service.getPrioritas();
    this.TWSPPPlan = service.getTWSPPPlan();
    this.TWSPPReal = service.getTWSPPReal();
    this.NomorSPP = service.getNomorSPP();
    this.StatusSPP = service.getStatusSPP();
    this.Anggaran = service.getAnggaran();
    this.TahunAnggaran = service.getTahunAnggaran();
    this.TahunTerbitPO = service.getTahunTerbitPO();
    this.GMPenanggungJawab = service.getGMPenanggungJawab();
    this.JenisProgramKerja = service.getJenisProgramKerja();
    this.TWPOPlan = service.getTWPOPlan();
    this.TWPOReal = service.getTWPOReal();
    this.Divisi = service.getDivisi();
    this.PemilikProgram = service.getPemilikProgram();
    this.Kriteria = service.getKriteria();
    this.Kendala = service.getKendala();
    this.JenisPengadaan = service.getJenisPengadaan();
    this.TOR = service.getTOR();
    this.RAB = service.getRAB();
    this.KKO = service.getKKO();
    this.KKF = service.getKKF();



   }

  ngOnInit() {
  }

}
