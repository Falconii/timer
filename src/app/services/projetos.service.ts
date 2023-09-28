import { ParametroProjeto01 } from './../parametros/parametro-projeto01';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjetoModel } from '../Models/projeto-model';
import { environment } from 'src/environments/environment';
import { AgeHorasModel } from '../Models/age-horas-model';
import { ParametroAgeHoras01 } from '../parametros/parametro-age-horas-01';

@Injectable({
  providedIn: 'root',
})
export class ProjetosService {
  apiURL: string = environment.apiURL;

  constructor(private http: HttpClient) {}

  getProjetos(): Observable<ProjetoModel[]> {
    return this.http.get<ProjetoModel[]>(`${this.apiURL}projetos`);
  }

  getProjetos_01(params: ParametroProjeto01): Observable<ProjetoModel[]> {
    return this.http.post<ProjetoModel[]>(`${this.apiURL}projetos`, params);
  }

  getProjeto(id_empresa: number, id: number) {
    return this.http.get<ProjetoModel>(
      `${this.apiURL}projeto/${id_empresa}/${id}`
    );
  }

  ProjetoInsert(projeto: ProjetoModel) {
    console.log(projeto);
    return this.http.post<ProjetoModel>(`${this.apiURL}projeto/`, projeto);
  }

  ProjetoUpdate(projeto: ProjetoModel) {
    return this.http.put<ProjetoModel>(`${this.apiURL}projeto/`, projeto);
  }

  ProjetoDelete(id_empresa: number, id: number) {
    return this.http.delete<ProjetoModel>(
      `${this.apiURL}projeto/${id_empresa}/${id}`
    );
  }

  getParametroAgeHorasAgeHoras01(par: ParametroAgeHoras01) {
    return this.http.post<any[]>(`${this.apiURL}agehoras/`, par);
  }
}
