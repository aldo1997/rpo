import { Injectable } from '@angular/core';

let Prioritas: string[] = [
  "Lain-lain",
  "1",
  "2",
  "3"
];
let TWSPPPlan: string[] = [
  "TW I",
  "TW II",
  "TW III",
  "TW IV"
];
let TWSPPReal: string[] = [
  "TW I",
  "TW II",
  "TW III",
  "TW IV"
]
let NomorSPP: string[] = [
  "/SPP/008/Pusat/ICON+/2014",
  "/SPP/008/Pusat/ICON+/2015",
  "/SPP/008/Pusat/ICON+/2016",
  "/SPP/008/Pusat/ICON+/2017",
  "/SPP/008/Pusat/ICON+/2018",
  "/SPP/008/Pusat/ICON+/2019",
]
let StatusSPP: string[] = [
  "Belum SPP",
  "Program Batal / Cancel",
  "Proses",
  "Reject ke User",
  "Selesai",
  "Selesai, PO Batal",
  "Sisa Budget",
  "SPP Batal",
  "SPP jadi Satu"
]
let Anggaran: string[] = [
  "CAPEX",
  "OPEX"
]
let TahunAnggaran: string[] = [
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020"
]
let TahunTerbitPO: string[] = [
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019"
]
let GMPenanggungJawab: string[] = [
  "VP Perencanaan",
  "VP Strategi Operasi",
  "VP Strategi Bisnis",
  "VP Pengendalian dan Monitoring",
  "VP Keuangan",
  "VP SDM dan Umum",
  "GM SSU Ketenagalistrikan",
  "GM SBS Infrastruktur",
  "GM SBS Korporat",
  "GM SBS TI dan Solusi Bisnis",
  "GM SBU Medan",
  "GM SBU Pekanbaru",
  "GM SBU Palembang",
  "GM SBU Jakarta",
  "GM SBU Bandung",
  "GM SBU Semarang",
  "GM SBU Surabaya",
  "GM SBU Denpasar",
  "GM SBU Balikpapan",
  "GM SBU Makassar",
  "Sekper",
  "VP HCM dan K3",
  "VP Inkubator Bisnis",
  "VP Kapasitas dan Cakupan",
  "VP Ekonomi Digital",
  "VP Kualitas Layanan Operasi",
  "GM SSU Operasi TI Publik"
]
let JenisProgramKerja: string[] = [
  "Usulan Pengadaan",
  "Turunan Usulan Pengadaan",
  "Turunan Usulan Pengadaan 2"
]
let TWPOPlan: string[] = [
  "TW I",
  "TW II",
  "TW III",
  "TW IV"
]
let TWPOReal: string[] = [
  "TW I",
  "TW II",
  "TW III",
  "TW IV"
]
let Divisi: string[] = [
  "ADKON",
  "Administrasi Umum",
  "Anggaran",
  "DANLOG",
  "Direktur Keuangan",
  "Direktur Utama",
  "GM Keuangan",
  "Pemilik Program",
  "Rendan"
]
let PemilikProgram: string[] = [
  "Manajemen Resiko",
  "Evaluasi Kinerja Korporat dan Proses Bisnis",
  "Strategi Korporat",
  "Humas",
  "Hukum",
  "Umum",
  "Pelayanan SDM",
  "Perencanaan SDM",
  "Pengembangan Organisasi",
  "Pengembangan Segmen Transmisi, Distribusi, Energi, dan Korporat",
  "PSPP",
  "Operasi dan Pemeliharaan Aplikasi",
  "Contact Center",
  "Kinerja dan Penjualan Ketenagalistrikan",
  "Kemitraan",
  "PNP",
  "Data Center",
  "Boss",
  "Regional Indonesia Timur",
  "Regional SBS",
  "Regional SBT",
  "Regional SBU",
  "Regional Jateng",
  "Regional Jatim",
  "Regional Jabar",
  "Regional Pemeliharaan JABO",
  "Regional Pembangunan JABO",
  "Manhar",
  "Manajemen Aset",
  "Desmulvi",
  "Configuration Management",
  "Performance Management",
  "PMO",
  "Fault Management",
  "Customer Loyalty",
  "OSP",
  "Desjar",
  "Renjar",
  "Pelayanan SDM dan K3",
  "Perencanaan Sumber Daya Bisnis Dan Organisasi",
  "Pengembangan SDM",
  "Teknologi Informasi Internal",
  "Perencanaan Sistem",
  "Produk dan Pemasaran",
  "Hubungan Kelembagaan",
  "Pelaporan Kinerja dan Korporat",
  "Desain Multimedia",
  "Premium ACC PLN",
  "Configuration MGMNT",
  "Perencanaan Pengadaan dan Sourcing",
  "Fasilitas",
  "Operasional BPO",
  "Pemeliharaan dan Pengembangan",
  "Infrastruktur IT",
  "Pemeliharaan Aplikasi",
  "Service MGMNT dan Service Control",
  "Contact Center dan Service Desk",
  "Pengembangan dan IMP 3 Bisnis",
  "Pengembangan dan IMP 2 Bisnis",
  "Pengembangan dan IMP 1 Bisnis",
  "Operasi, Pemeliharaan dan Aset",
  "Pembangunan dan AKV 2",
  "Pembangunan dan AKV 2"
]
let Kriteria: string[] = [
  "Critical",
  "Strategis",
  "Leverage",
  "Rutin"
]
let Kendala: string[] = [
  "Internal",
  "Eksternal",
  "Data Teknis / User",
  "Dok Resiko",
  "Approval GM Tekait",
  "Approval Direksi Terkait"
]
let JenisPengadaan: string[] = [
  "Penunjukan Langsung",
  "Pelelangan Terbatas",
  "Open Tender",
  "Standar",
  "SPR"
]
let TOR: string[] = [
  "1",
  "0"
]
let RAB: string[] = [
  "1",
  "0"
]
let KKO: string[] = [
  "1",
  "0"
]
let KKF: string[] = [
  "1",
  "0"
]

@Injectable({
  providedIn: 'root'
})
export class InsertService {
  getPrioritas(): string[] {
    return Prioritas;
}
  getTWSPPPlan(): string[]{
    return TWSPPPlan;
  }
  getTWSPPReal() : string[]{
    return TWSPPReal;
  }
  getNomorSPP() : string[]{
      return NomorSPP;
    }
  getStatusSPP() : string[]{
    return StatusSPP;
  }
  getAnggaran() : string[]{
    return Anggaran;
  }
  getTahunAnggaran() : string[]{
    return TahunAnggaran;
  }
  getTahunTerbitPO() : string[]{
    return TahunTerbitPO;
  }
  getGMPenanggungJawab() : string[]{
    return GMPenanggungJawab;
  }
  getJenisProgramKerja() : string[]{
    return JenisProgramKerja;
  }
  getTWPOPlan() : string[]{
    return TWPOPlan;
  }
  getTWPOReal() : string[]{
    return TWPOReal;
  }
  getDivisi() : string[]{
    return Divisi;
  }
  getPemilikProgram() : string[]{
    return PemilikProgram;
  }
  getKriteria() : string[]{
    return Kriteria;
  }
  getKendala() : string[]{
    return Kendala;
  }
  getJenisPengadaan() : string[]{
    return JenisPengadaan;
  }
  getTOR() : string[]{
    return TOR;
  }
  getRAB() : string[]{
    return RAB;
  }
  getKKO() : string[]{
    return KKO;
  }
  getKKF() : string[]{
    return KKF;
  }
  

  constructor() { }
}
