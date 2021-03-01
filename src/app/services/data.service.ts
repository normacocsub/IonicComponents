import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlUsuarios: string = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get(this.urlUsuarios);
  }

  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }
}
