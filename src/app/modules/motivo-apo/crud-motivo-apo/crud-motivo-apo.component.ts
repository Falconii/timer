import { GlobalService } from 'src/app/services/global.service';
import { ParametroMotivoApo01 } from '../../../parametros/parametro-motivo-apo01';
import { MotivoApoService } from '../../../services/motivo-apo.service';
import { MotivoApoModel } from '../../../Models/motivo-apo-model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroAcoes } from 'src/app/shared/classes/cadastro-acoes';
import { MensagensBotoes } from 'src/app/shared/classes/util';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';

@Component({
  selector: 'app-crud-motivo-apo',
  templateUrl: './crud-motivo-apo.component.html',
  styleUrls: ['./crud-motivo-apo.component.css'],
})
export class CrudMotivoApoComponent implements OnInit {
  inscricaoGetAll!: Subscription;
  inscricaoGetFiltro!: Subscription;

  motivos: MotivoApoModel[] = [];

  parametros: FormGroup;

  erro: string = '';

  opcoesOrdenacao = ['Código', 'Motivo'];

  opcoesCampo = ['Código', 'Motivo'];

  isSingleClick: Boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private motivoApoService: MotivoApoService,
    private router: Router,
    private appSnackBar: AppSnackbar,
    private globalService: GlobalService
  ) {
    this.parametros = formBuilder.group({
      ordenacao: [null],
      campo: [null],
      filtro: [null],
    });
    this.setValues();
  }

  ngOnInit(): void {
    this.getmotivos();
  }

  setValues() {
    this.parametros.setValue({
      ordenacao: 'Código',
      campo: 'Código',
      filtro: '',
    });
  }

  ngOnDestroy() {
    this.inscricaoGetAll?.unsubscribe();
    this.inscricaoGetFiltro?.unsubscribe();
  }

  escolha(opcao: number, motivo?: MotivoApoModel) {
    if (typeof motivo != 'undefined') {
      console.log(motivo);
      this.router.navigate([
        '/motivos/motivo',
        motivo.id_empresa,
        motivo.codigo,
        opcao,
      ]);
    } else {
      this.router.navigate(['/motivos/motivo', 1, '', opcao]);
    }
  }

  getAcoes() {
    return CadastroAcoes;
  }

  getmotivos() {
    let par = new ParametroMotivoApo01();

    par.id_empresa = 1;

    if (this.parametros.value.campo == 'Código')
      par.codigo = this.parametros.value.filtro.toUpperCase();

    if (this.parametros.value.campo == 'Motivo')
      par.motivo = this.parametros.value.filtro.toUpperCase();

    par.orderby = this.parametros.value.ordenacao;
    this.globalService.setSpin(true);
    this.inscricaoGetFiltro = this.motivoApoService
      .getMotivoApos_01(par)
      .subscribe(
        (data: MotivoApoModel[]) => {
          this.globalService.setSpin(false);
          this.motivos = data;
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.motivos = [];
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nas motivos ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
            'OK'
          );
        }
      );
  }

  /*
  method1CallForClick(motivo: MotivoApoModel, opcao: number) {
    this.isSingleClick = true;
    setTimeout(() => {
      if (this.isSingleClick) {
        this.escolha(motivo, opcao);
      }
    }, 250);
  }
  method2CallForDblClick(motivo: MotivoApoModel, opcao: number) {
    this.isSingleClick = false;
    this.escolha(motivo, opcao);
  }
*/
  getTexto() {
    return MensagensBotoes;
  }

  onHome() {
    this.router.navigate(['']);
  }
}
