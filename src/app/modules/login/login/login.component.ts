import { ProgressBarClass } from '../../../shared/components/progress-bar/ProgressBar-class';
import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { UsuariosService } from './../../../services/usuarios.service';
import { UsuarioModel } from 'src/app/Models/usuario-model';
import { GlobalService } from './../../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';
import { ProgressBarComponent } from 'src/app/shared/components/progress-bar/progress-bar.component';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  usuario: UsuarioModel = new UsuarioModel();
  inscricaoUsuario!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalService,
    private usuariosService: UsuariosService,
    private router: Router,
    private matDialog: MatDialog,
    private appSnackBar: AppSnackbar
  ) {
    this.formulario = this.formulario = formBuilder.group({
      id: [{ value: '' }],
      senha: [{ value: '' }],
    });
  }

  ngOnInit(): void {
    this.usuario = this.globalService.getUsuario();
    this.usuario.senha = '';
    this.setValue();
  }

  ngOnDestroy(): void {
    this.inscricaoUsuario?.unsubscribe();
  }

  setValue() {
    this.formulario.setValue({
      id: this.usuario.id,
      senha: this.usuario.senha,
    });
  }

  getUsuario(id: number, password: string) {
    this.globalService.setSpin(true);
    this.inscricaoUsuario = this.usuariosService
      .getUsuario(this.globalService.getIdEmpresa(), id)
      .subscribe(
        (data: UsuarioModel) => {
          this.usuario = data;
          if (this.usuario.senha == password) {
            this.globalService.setUsuario(this.usuario);
            this.globalService.setLogado(true);
          } else {
            this.appSnackBar.openFailureSnackBar(
              `Usuário Ou Senha Incorretos`,
              'OK'
            );
          }
          this.globalService.setSpin(false);
        },
        (error: any) => {
          console.log('error', error);
          this.usuario = new UsuarioModel();
          this.appSnackBar.openFailureSnackBar(
            `Usuário Ou Senha Incorretos`,
            'OK'
          );
          this.globalService.setSpin(false);
        }
      );
  }

  onValidar() {
    const id = this.formulario.value.id;
    const senha = this.formulario.value.senha;
    this.getUsuario(id, senha);
  }

  onCancelar() {
    this.router.navigate(['/']);
  }

  onSair() {
    this.globalService.setLogado(false);
    this.globalService.setUsuario(new UsuarioModel());
  }

  onEsqueceu(): void {
    this.showDialog('Ola....');
  }

  showDialog(value: string): void {
    const mensa: ProgressBarClass = new ProgressBarClass();
    mensa.labelOk = 'Continua...';
    mensa.labelCancel = 'Cancelar';
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '350px';
    dialogConfig.width = '600px';
    dialogConfig.data = mensa;
    const modalDialog = this.matDialog
      .open(ProgressBarComponent, dialogConfig)
      .beforeClosed()
      .subscribe((result) => {
        console.log('result', result);
      });
  }
}
