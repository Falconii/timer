import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FeriadoModel } from '../Models/feriado-model';
import { ParametroFeriado01 } from '../parametros/parametro-feriado01';
import { FeriadoPonteModel } from '../Models/feriado-ponte-model';

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

  getFeriados_01(params: ParametroFeriado01): Observable<FeriadoModel[]> {
    return this.http.post<FeriadoModel[]>(`${this.apiURL}feriados`, params);
  }

  getPontes_01(params: ParametroFeriado01): Observable<FeriadoPonteModel[]> {
    return this.http.post<FeriadoPonteModel[]>(
      `${this.apiURL}feriados`,
      params
    );
  }
  FeriadoInsert(feriado: FeriadoModel) {
    return this.http.post<FeriadoModel>(`${this.apiURL}feriado/`, feriado);
  }
}
