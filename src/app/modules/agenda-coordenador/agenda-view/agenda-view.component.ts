import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsuarioModel } from 'src/app/Models/usuario-model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { CalendarLine } from 'src/app/shared/calendar-line';
import { CelulaDia } from 'src/app/shared/celula-dia';
import { ListaMeses } from 'src/app/shared/lista-meses';

@Component({
  selector: 'app-agenda-view',
  templateUrl: './agenda-view.component.html',
  styleUrls: ['./agenda-view.component.css'],
})
export class AgendaViewComponent implements OnInit {
  parametro: FormGroup;
  inscricaoUsuario!: Subscription;
  inscricaoAuditor!: Subscription;
  usuario: UsuarioModel = new UsuarioModel();
  auditor: UsuarioModel = new UsuarioModel();
  auditores: UsuarioModel[] = [];
  calendario: CelulaDia[] = [];
  linhas: CalendarLine[] = [];
  anos: number[] = [2022, 2023, 2024];
  meses: ListaMeses = new ListaMeses();
  hoje: Date = new Date();
  constructor(
    formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.parametro = formBuilder.group({
      usuario: [{ value: '' }],
      auditores: [{ value: '' }],
      ano: [{ value: '' }],
      mes: [{ value: '' }],
    });
    this.getUsuario();
    this.getAuditores();
    this.setParametro();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.inscricaoUsuario?.unsubscribe();
    this.inscricaoAuditor?.unsubscribe();
  }

  onSubmit() {
    this.loadCalendario();
  }
  setParametro() {
    this.parametro.setValue({
      usuario: this.usuario.razao,
      auditores: this.auditor.id,
      ano: this.hoje.getFullYear(),
      mes: this.hoje.getMonth(),
    });
  }

  getUsuario() {
    this.inscricaoUsuario = this.usuariosService.getUsuario(1, 6).subscribe(
      (data: UsuarioModel) => {
        this.usuario = data;
        this.parametro.patchValue({ usuario: this.usuario.razao });
      },
      (error: any) => {
        this.usuario = new UsuarioModel();
        this.openSnackBar_Err(
          `${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
          'OK'
        );
      }
    );
  }

  getAuditores() {
    this.inscricaoAuditor = this.usuariosService.getUsuario(1, 5).subscribe(
      (data: UsuarioModel) => {
        this.auditor = data;
        this.auditores.push(data);
        this.parametro.patchValue({ auditores: this.auditor.id });
      },
      (error: any) => {
        this.usuario = new UsuarioModel();
        this.openSnackBar_Err(
          `${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
          'OK'
        );
      }
    );
  }

  onRetorno() {
    this.router.navigate(['/']);
  }
  openSnackBar_Err(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  loadCalendario() {
    var inicio: Date = new Date(
      this.parametro.value.ano,
      this.parametro.value.mes,
      1,
      0
    );
    var mes: number = inicio.getMonth();
    var controle: number = 0;
    var car: CalendarLine;
    const first: number = inicio.getDay();
    this.calendario = [];
    inicio.setDate(inicio.getDate() - inicio.getDay());
    while (inicio.getDay() < first) {
      const dia: CelulaDia = new CelulaDia();
      dia.dia = inicio.getDate();
      dia.data = new Date(inicio);
      dia.semana = inicio.getDay();
      dia.tipo = 3;
      dia.horasplanejadas = 60;
      dia.horasexecutadas = 70;
      dia.descricao = 'Teste';
      this.calendario.push(dia);
      inicio.setDate(inicio.getDate() + 1);
    }
    inicio = new Date(this.parametro.value.ano, this.parametro.value.mes, 1, 0);
    while (mes == inicio.getMonth()) {
      const dia: CelulaDia = new CelulaDia();
      dia.dia = inicio.getDate();
      dia.data = new Date(inicio);
      dia.semana = inicio.getDay();
      dia.tipo = inicio.getDay() == 0 ? 0 : 1;
      dia.horasplanejadas = 100;
      dia.horasexecutadas = 70;
      dia.descricao = 'Teste';
      this.calendario.push(dia);
      inicio.setDate(inicio.getDate() + 1);
    }

    this.linhas = [];

    car = new CalendarLine();

    controle = 0;

    this.calendario.forEach((obj) => {
      if (controle > 6) {
        this.linhas.push(car);
        controle = 0;
        car = new CalendarLine();
      }
      car.line.push(obj);
      controle++;
    });
    if (controle > 0) {
      while (controle < 7) {
        const dia: CelulaDia = new CelulaDia();
        dia.dia = inicio.getDate();
        dia.data = new Date(inicio);
        dia.semana = inicio.getDay();
        dia.tipo = 3;
        dia.horasplanejadas = 90;
        dia.horasexecutadas = 70;
        dia.descricao = 'Teste';
        this.calendario.push(dia);
        inicio.setDate(inicio.getDate() + 1);
        car.line.push(dia);
        controle++;
      }
      this.linhas.push(car);
    }
  }
}
