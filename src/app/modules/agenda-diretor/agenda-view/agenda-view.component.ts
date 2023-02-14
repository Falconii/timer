import { AgeHoras } from './../../../Models/age-horas';
import { AuditorModel } from './../../../Models/auditor-model';
import { GlobalService } from 'src/app/services/global.service';
import { UsuarioQuery01Model } from './../../../Models/usuario-query_01-model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UsuarioModel } from 'src/app/Models/usuario-model';
import { CalendarLine } from 'src/app/shared/calendar-line';
import { CelulaDia } from 'src/app/shared/celula-dia';
import { ListaMeses } from 'src/app/shared/lista-meses';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ParametroUsuario01 } from 'src/app/parametros/parametro-usuario-01';
import { ProjetosService } from 'src/app/services/projetos.service';
import { ParametroAgeHoras01 } from 'src/app/parametros/parametro-age-horas-01';

@Component({
  selector: 'app-agenda-view',
  templateUrl: './agenda-view.component.html',
  styleUrls: ['./agenda-view.component.css'],
})
export class AgendaViewComponent implements OnInit {
  parametro: FormGroup;
  inscricaoDiretor!: Subscription;
  inscricaoCoordenador!: Subscription;
  inscricaoAuditor!: Subscription;
  inscricaoAgenda!: Subscription;

  diretor: UsuarioQuery01Model = new UsuarioQuery01Model();
  diretores: UsuarioQuery01Model[] = [];

  coordenador: UsuarioQuery01Model = new UsuarioQuery01Model();
  coordenadores: UsuarioQuery01Model[] = [];

  auditor: UsuarioQuery01Model = new UsuarioQuery01Model();
  auditores: UsuarioQuery01Model[] = [];

  agendas: AgeHoras[] = [];

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
    private projetosService: ProjetosService,
    private globalService: GlobalService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.parametro = formBuilder.group({
      diretores: [{ value: '' }],
      coordenadores: [{ value: '' }],
      auditores: [{ value: '' }],
      ano: [{ value: '' }],
      mes: [{ value: '' }],
    });
    this.getDiretores();
    this.getCoordenadores();
    this.getAuditores();
    this.setParametro();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.inscricaoDiretor?.unsubscribe();
    this.inscricaoAuditor?.unsubscribe();
    this.inscricaoCoordenador?.unsubscribe();
    this.inscricaoAgenda?.unsubscribe();
  }

  onSubmit() {
    this.coordenador.id = this.parametro.value.coordenadores;
    this.auditor.id = this.parametro.value.auditores;
    this.getAgenda();
  }
  setParametro() {
    this.parametro.setValue({
      diretores: this.diretor.id,
      coordenadores: this.coordenador.id,
      auditores: this.auditor.id,
      ano: this.hoje.getFullYear(),
      mes: this.hoje.getMonth(),
    });
  }

  getDiretores() {
    const par = new ParametroUsuario01();

    par.id_empresa = this.globalService.id_empresa;

    par.grupo = this.usuariosService.getGruposDiretoria();

    this.inscricaoDiretor = this.usuariosService.getusuarios_01(par).subscribe(
      (data: UsuarioQuery01Model[]) => {
        this.diretor = data[0];
        data.forEach((diretor) => {
          this.diretores.push(diretor);
        });
        if (
          this.usuariosService.isDiretoria(
            this.globalService.getUsuario().grupo
          )
        ) {
          this.parametro.patchValue({
            diretores: this.globalService.getUsuario().id,
          });
        } else {
          this.parametro.patchValue({ diretores: this.diretor.id });
        }
      },
      (error: any) => {
        this.diretor = new UsuarioQuery01Model();
        this.openSnackBar_Err(
          `${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
          'OK'
        );
      }
    );
  }

  getCoordenadores() {
    const par = new ParametroUsuario01();

    par.id_empresa = this.globalService.id_empresa;

    par.grupo = this.usuariosService.getGruposCoordenador();

    this.inscricaoCoordenador = this.usuariosService
      .getusuarios_01(par)
      .subscribe(
        (data: UsuarioQuery01Model[]) => {
          this.coordenador = new UsuarioQuery01Model();
          this.coordenador.razao = 'TODOS';
          this.coordenadores.push(this.coordenador);
          data.forEach((coordenador) => {
            this.coordenadores.push(coordenador);
          });
          this.parametro.patchValue({ coordenadores: this.coordenador.id });
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
        this.auditor = new UsuarioQuery01Model();
        this.auditor.razao = 'TODOS';
        this.auditores.push(this.auditor);
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

  getAgenda() {
    const par = new ParametroAgeHoras01();

    par.id_empresa = this.globalService.id_empresa;

    par.id_exec = this.auditor.id;

    par.id_resp = this.coordenador.id;

    par.ano = this.parametro.value.ano;

    par.mes = this.adicionaZero(this.parametro.value.mes);

    console.log('Mes ==>', par.mes);

    this.inscricaoAgenda = this.projetosService
      .getParametroAgeHorasAgeHoras01(par)
      .subscribe(
        (data: any[]) => {
          this.agendas = [];
          data.forEach((dt) => {
            const age = new AgeHoras();
            age.dia = parseInt(dt.dia);
            age.horas_plan = Number(dt.horas_plan);
            age.horas_exec = Number(dt.horas_exec);
            this.agendas.push(age);
          });
          this.loadCalendario();
        },
        (error: any) => {
          this.agendas = [];
          this.loadCalendario();
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
      dia.descricao = 'Antes';
      this.calendario.push(dia);
      inicio.setDate(inicio.getDate() + 1);
    }
    inicio = new Date(this.parametro.value.ano, this.parametro.value.mes, 1, 0);

    while (mes == inicio.getMonth()) {
      const dia: CelulaDia = new CelulaDia();
      dia.dia = inicio.getDate();
      const agenda = this.agendas.find((age) => age.dia === dia.dia);
      dia.data = new Date(inicio);
      dia.semana = inicio.getDay();
      dia.tipo = inicio.getDay() == 0 ? 0 : 1;
      if (agenda == null) {
        dia.horasplanejadas = 0;
        dia.horasexecutadas = 0;
      } else {
        dia.horasplanejadas = agenda.horas_plan;
        dia.horasexecutadas = agenda.horas_exec;
      }
      dia.descricao = 'Dias do mês';
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
        dia.descricao = 'Depois';
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

  adicionaZero(numero: any): string {
    if (numero <= 9) return '0' + numero;
    else return '' + numero;
  }
}
