import { ProjetosService } from './../../../services/projetos.service';
import { AtividadeHorasDirModel } from './../../../Models/atividade-horas-dir-model';
import { HorasDiretoriaData } from './horas-diretoria-dialog/horas-diretoria-data';
import { AtividadesService } from './../../../services/atividades.service';
import { Subscription, Subscriber } from 'rxjs';
import { GlobalService } from './../../../services/global.service';
import { ProjetoModel } from './../../../Models/projeto-model';
import { Component, OnInit } from '@angular/core';
import { ParametroAtividade01 } from 'src/app/parametros/parametro-atividade01';
import { ActivatedRoute, Router } from '@angular/router';
import { AtividadeQuery_01Model } from 'src/app/Models/atividade-query_01-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HorasDiretoriaDialogComponent } from './horas-diretoria-dialog/horas-diretoria-dialog.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-horas-diretoria',
  templateUrl: './horas-diretoria.component.html',
  styleUrls: ['./horas-diretoria.component.css'],
})
export class HorasDiretoriaComponent implements OnInit {
  formulario: FormGroup;
  projeto: ProjetoModel = new ProjetoModel();

  inscricaoGetFiltro!: Subscription;
  inscricaoRota!: Subscription;
  inscricaoSave!: Subscription;
  incricaoProjeto!: Subscription;

  id_empresa: number = 0;

  conta: string = '';

  versao: string = '';

  id_projeto: number = 0;

  atividades: AtividadeQuery_01Model[] = [];

  durationInSeconds = 2;

  constructor(
    private formBuilder: FormBuilder,
    public horasDiretoriaDialog: MatDialog,
    private globalService: GlobalService,
    private atividadesService: AtividadesService,
    private projetosService: ProjetosService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.inscricaoRota = route.params.subscribe((params: any) => {
      this.id_empresa = params.id_empresa;
      this.id_projeto = params.id_projeto;
    });
    this.formulario = formBuilder.group({
      horasplan: [{ value: '' }],
      horasexec: [{ value: '' }],
      horasdir: [{ value: '' }],
    });
    this.setValue();
  }

  ngOnInit() {
    this.getProjeto();
    this.getAtividades();
  }

  ngOnDestroy(): void {
    this.inscricaoGetFiltro?.unsubscribe();
    this.inscricaoRota?.unsubscribe();
    this.inscricaoSave?.unsubscribe();
    this.incricaoProjeto?.unsubscribe();
  }

  getAtividades() {
    let par = new ParametroAtividade01();

    par.id_empresa = this.id_empresa;

    par.id_projeto = this.id_projeto;

    par.nivel = 1;

    par.orderby = 'projeto';

    this.globalService.setSpin(true);
    this.inscricaoGetFiltro = this.atividadesService
      .getAtividades_01(par)
      .subscribe(
        (data: AtividadeQuery_01Model[]) => {
          this.globalService.setSpin(false);
          this.atividades = data;
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.atividades = [];
          if (error.error.message == 'Nehuma Informação Para Esta Consulta.') {
            this.openSnackBar_OK(
              'Nenhuma Atividade Encontrada Para Este Projeto!',
              'OK'
            );
          } else {
            this.openSnackBar_Err(
              `${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
              'OK'
            );
          }
        }
      );
  }

  getProjeto() {
    this.globalService.setSpin(true);
    this.incricaoProjeto = this.projetosService
      .getProjeto(this.id_empresa, this.id_projeto)
      .subscribe(
        (data: ProjetoModel) => {
          this.globalService.setSpin(false);
          this.projeto = data;
          this.setValue();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.projeto = new ProjetoModel();
          this.setValue();
          if (error.error.message == 'Nehuma Informação Para Esta Consulta.') {
            this.openSnackBar_OK('Nenhum Projeto! Encontrado', 'OK');
          } else {
            this.openSnackBar_Err(
              `${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
              'OK'
            );
          }
        }
      );
  }

  saveHorasDir(atividade: AtividadeQuery_01Model, value: number) {
    const horas: AtividadeHorasDirModel = new AtividadeHorasDirModel();
    horas.id_empresa = atividade.id_empresa;
    horas.id_atividade = atividade.id;
    horas.horasdir = value;
    horas.user_update = this.globalService.getUsuario().id;
    this.globalService.setSpin(true);
    this.inscricaoSave = this.atividadesService
      .atividadeUpdateHoraDir(horas)
      .subscribe(
        (data: AtividadeHorasDirModel) => {
          this.globalService.setSpin(false);
          this.openSnackBar_OK('Horas Alteradas!', 'OK');
          this.getProjeto();
          this.getAtividades();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.atividades = [];
          this.openSnackBar_Err(
            `${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
            'OK'
          );
        }
      );
  }

  setValue() {
    this.formulario.setValue({
      horasplan: this.projeto.horasplan,
      horasexec: this.projeto.horasexec,
      horasdir: this.projeto.horasdir,
    });
  }

  async openSnackBar_OK(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: this.durationInSeconds * 1000,
    });
    await this.delay(this.durationInSeconds * 1000);
  }

  openSnackBar_Err(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  getLabelCabec(): string {
    if (this.atividades.length > 0) {
      return `Projeto:${this.atividades[0].id_projeto} ${this.atividades[0].proj_descri} - Horas Diretoria `;
    } else {
      return '';
    }
  }
  onHorasDiretoria(atividade: AtividadeQuery_01Model): void {
    this.openHorasDiretoriaDialog(atividade);
  }

  openHorasDiretoriaDialog(atividade: AtividadeQuery_01Model): void {
    const data: HorasDiretoriaData = new HorasDiretoriaData();
    data.horasdir = atividade.horasdir;

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = 'horasdir';
    dialogConfig.width = '600px';
    dialogConfig.data = data;

    const modalDialog = this.horasDiretoriaDialog
      .open(HorasDiretoriaDialogComponent, dialogConfig)
      .beforeClosed()
      .subscribe((data: HorasDiretoriaData) => {
        console.log(data);
        if (data.processar) {
          this.saveHorasDir(atividade, data.horasdir);
        } else {
          alert('Ação Ignorada');
        }
      });
  }
  onRetorno(): void {
    this.router.navigate(['/projetos']);
  }
}
