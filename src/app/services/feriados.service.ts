import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FeriadoModel } from '../Models/feriado-model';

@Injectable({
  providedIn: 'root',
})
export class FeriadosService {
  apiURL: string = environment.apiURL;

  constructor(private http: HttpClient) {}

  getFeriados(): Observable<FeriadoModel[]> {
    return this.http.get<FeriadoModel[]>(`${this.apiURL}feriados`);
  }

  getFeriado(codigo: string): Observable<FeriadoModel> {
    let url: string = `${this.apiURL}estruturas/feriados?datafer=` + codigo;
    return this.http.get<FeriadoModel>(url);
  }
}
