import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from '../../../app.constant';
import { Spp } from './spp.model';

const simpleProduct: string[] = ['Y', 'N'];

@Injectable({
  providedIn: 'root'
})
export class SppService {
  private resourceUrlSpp = this.a.SERVER_URL + '/system/spp';
  private resourceUrlMenu = this.a.SERVER_URL + './menu_tab';
  private resourceUrlSppAuth = this.a.SERVER_URL + '';

  constructor(private http: HttpClient, private a: AppConstant) { }

  getSimpleProduct(): string[]{
    return simpleProduct;
  }

  getById(id: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(this.resourceUrlSpp + '/retrieve?token=' + token + '&role_id=' + id)
  }

  getAll(): Observable<any> {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    return this.http.post < any > (this.resourceUrlSpp + '/table', {
      username : username,
      token : token
    })
  }

  getAllMenu(): Observable<any> {
    return this.http.get(this.resourceUrlMenu)
  }

  save(data: Spp): Observable<any> {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    const today = new Date().toISOString().slice(0, 10);
    data.createdate = today;
    data.spp_update_by = username;
    // data.isallowregistration = 1;
    return this.http.post < any > (this.resourceUrlSpp + '/insert', data)
  }

  update(data: Spp): Observable<any> {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    const today = new Date().toISOString().slice(0, 10);
    data.updatedate = today;
    data.update_by = username;
    console.log('isdisplayed = ' + data.isdisplayed);
    console.log(data);
    /*
    if (data.isallowregistration = false) {
      data.isallowregistration = '1';
    } else {
      data.isallowregistration = '0';
    }
    */
    return this.http.post < any > (this.resourceUrlSpp + '/update', data)
  }

  delete(data: any): Observable<any> {
    /* data.activationCode = 'N';
    return this.http.put(this.resourceUrlSpp + '/' + data.role_id, data)*/
    const token = localStorage.getItem('token');
    return this.http.get(this.resourceUrlSpp + '/delete?token=' + token + '&role_id=' + data.role_id)
  }

  getByName(roleName: any): Observable<any> {
    return this.http.get(this.resourceUrlSpp + '/filter?search=roleName:' + roleName.toString().toUpperCase());
  }

  saveSppAuth(data: any) {
    return this.http.post(this.resourceUrlSppAuth, data)
  }

  updateSppAuth(data: any) {
    return this.http.put(this.resourceUrlSppAuth + '/' + data.authId, data)
  }

  getByData(data: any): Observable<any> {
    return this.http.get(this.resourceUrlSpp +
      '/filter?search=id:' + data.id +
      ',roleName:' + data.roleName.toString().toUpperCase() +
      ',description:' + data.description
    );
  }

  getAllSppAuth(): Observable<any> {
    return this.http.get(this.resourceUrlSppAuth)
  }

  deleteSppAuth(id: any): Observable<any> {
    return this.http.delete(this.resourceUrlSppAuth + '/' + id)
  }

  getLimit(offset,limit): Observable<any> {
    offset = Number(offset)*Number(limit);
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    console.log(this.resourceUrlSpp + '/table?offset=' + offset + '&limit='+limit);
    return this.http.post < any > (this.resourceUrlSpp +'/table?offset='+offset+'&limit='+limit, {
      username : username,
      token : token
    })
  }
}
