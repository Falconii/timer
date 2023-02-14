import { GlobalService } from './../../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsuarioModel } from 'src/app/Models/usuario-model';
import { UsuarioQuery01Model } from 'src/app/Models/usuario-query_01-model';
import { ParametroUsuario01 } from 'src/app/parametros/parametro-usuario-01';
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

  inscricaoCoordenador!: Subscription;
  inscricaoAuditor!: Subscription;

  coordenador: UsuarioQuery01Model = new UsuarioQuery01Model();
  coordenadores: UsuarioQuery01Model[] = [];

  auditor: UsuarioQuery01Model = new UsuarioQuery01Model();
  auditores: UsuarioQuery01Model[] = [];

  calendario: CelulaDia[] = [];
  linhas: CalendarLine[] = [];
  anos: number[] = [2022, 2023, 2024];
  meses: ListaMeses = new ListaMeses();
  hoje: Date = new Date();
  showLancamento: boolean = false;
  celulaDia: CelulaDia = new CelulaDia();

  constructor(
    formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private globalService: GlobalService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.parametro = formBuilder.group({
      coordenadores: [{ value: '' }],
      auditores: [{ value: '' }],
      ano: [{ value: '' }],
      mes: [{ value: '' }],
    });
    this.getCoordenadores();
    this.getAuditores();
    this.setParametro();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.inscricaoAuditor?.unsubscribe();
    this.inscricaoCoordenador?.unsubscribe();
  }

  onSubmit() {
    this.loadCalendario();
  }

  setParametro() {
    this.parametro.setValue({
      coordenadores: this.coordenador.id,
      auditores: this.auditor.id,
      ano: this.hoje.getFullYear(),
      mes: this.hoje.getMonth(),
    });
  }

  getCoordenadores() {
    const par = new ParametroUsuario01();

    par.id_empresa = this.globalService.id_empresa;

    par.grupo = this.usuariosService.getGruposCoordenador();

    this.inscricaoCoordenador = this.usuariosService
      .getusuarios_01(par)
      .subscribe(
        (data: UsuarioQuery01Model[]) => {
          console.log('Coordenadores: ', data);
          this.coordenador = data[0];
          data.forEach((coordenador) => {
            this.coordenadores.push(coordenador);
          });
          if (
            this.usuariosService.isCoordenador(
              this.globalService.getUsuario().grupo
            )
          ) {
            this.parametro.patchValue({
              coordenadores: this.globalService.getUsuario().id,
            });
          } else {
            this.parametro.patchValue({ coordenadores: this.coordenador.id });
          }
        },
        (error: any) => {
          this.coordenador = new UsuarioQuery01Model();
          this.openSnackBar_Err(
            `${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
            'OK'
          );
        }
      );
  }

  getAuditores() {
    const par = new ParametroUsuario01();

    par.id_empresa = this.globalService.id_empresa;

    par.grupo = this.usuariosService.getGruposAuditor();

    this.inscricaoAuditor = this.usuariosService.getusuarios_01(par).subscribe(
      (data: UsuarioQuery01Model[]) => {
        this.auditor = data[0];
        data.forEach((auditor) => {
          this.auditores.push(auditor);
        });
        this.parametro.patchValue({ auditores: this.auditor.id });
      },
      (error: any) => {
        this.auditor = new UsuarioQuery01Model();
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
  onDay(celula: CelulaDia) {
    if (celula.tipo == 3 || celula.semana == 0) {
      this.showLancamento = false;
    } else {
      this.showLancamento = true;
    }

    this.celulaDia = celula;
  }
}
