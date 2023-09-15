import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApoExecucaoModel } from 'src/app/Models/apo-execucao-model';
import { ApoExecucaoModel01 } from 'src/app/Models/apo-execucao-model01';
import { MotivoApoModel } from 'src/app/Models/motivo-apo-model';
import { ParametroMotivoApo01 } from 'src/app/parametros/parametro-motivo-apo01';
import { AponExecucaoService } from 'src/app/services/apon-execucao.service';
import { GlobalService } from 'src/app/services/global.service';
import { MotivoApoService } from 'src/app/services/motivo-apo.service';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { messageError } from 'src/app/shared/classes/util';
import { HoraSexagenalPipe } from 'src/app/shared/pipes/hora-sexagenal.pipe';

@Component({
  selector: 'app-facilitador',
  templateUrl: './facilitador.component.html',
  styleUrls: ['./facilitador.component.css'],
})
export class FacilitadorComponent implements OnInit {
  formulario: FormGroup;

  inscricaoMotivos!: Subscription;

  focusEntrada: boolean = false;
  focusCancelar: boolean = false;
  gravando: boolean = false;
  lsMotivos: MotivoApoModel[] = [];
  apontamentos: ApoExecucaoModel01[] = [];
  apontamento: ApoExecucaoModel = new ApoExecucaoModel();

  horaInicial: number = 6;
  horaFinal: number = 23;
  horas: number = 0;

  constructor(
    formBuilder: FormBuilder,
    private horasexagenal: HoraSexagenalPipe,
    private aponExecucaoService: AponExecucaoService,
    private motivoApoService: MotivoApoService,
    private globalService: GlobalService,
    private router: Router,
    private appSnackBar: AppSnackbar
  ) {
    this.formulario = formBuilder.group({
      entrada: [{ value: '' }, [Validators.required]],
      saida: [{ value: '' }, [Validators.required]],
      id_motivo: [{ value: '' }, [Validators.required]],
      obs: [{ value: '' }, [Validators.maxLength(150)]],
    });
  }

  ngOnInit(): void {
    this.getMotivos();
  }

  ngOnDestroy(): void {
    this.inscricaoMotivos?.unsubscribe();
  }

  getMotivos() {
    let para = new ParametroMotivoApo01();
    para.id_empresa = 1;
    para.analitico = 'S';
    para.orderby = 'Código';
    this.globalService.setSpin(true);
    this.inscricaoMotivos = this.motivoApoService
      .getMotivoApos_01(para)
      .subscribe(
        (data: MotivoApoModel[]) => {
          this.globalService.setSpin(false);
          this.lsMotivos = data;
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.lsMotivos = [];
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Motivos Apontamentos ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  setValue() {
    this.formulario.setValue({
      entrada: this.apontamento.inicial.substring(
        this.apontamento.inicial.indexOf(' ') + 1,
        16
      ),
      saida: this.apontamento.final.substring(
        this.apontamento.final.indexOf(' ') + 1,
        16
      ),
      id_motivo: this.apontamento.id_motivo,
      encerra: this.apontamento.encerramento == 'S' ? true : false,
      obs: this.apontamento.obs,
    });
  }

  onSubmit() {}

  onCancel() {}

  onPulaAlmoço() {}

  onDiaTodo() {}

  formatLabel(value: number): string {
    return this.horasexagenal.transform(value);
  }

  onPegaHora() {}
}
