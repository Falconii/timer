import { UsuariosService } from './../../../services/usuarios.service';
import { UsuarioModel } from 'src/app/Models/usuario-model';
import { GlobalService } from './../../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  usuario: UsuarioModel = new UsuarioModel();
  inscricaoUsuario!: Subscription;
  durationInSeconds = 2;

  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalService,
    private usuariosService: UsuariosService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.formulario = this.formulario = formBuilder.group({
      id: [{ value: '' }],
      senha: [{ value: '' }],
    });
  }

  ngOnInit(): void {
    this.usuario = this.globalService.getUsuario();
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
    this.inscricaoUsuario = this.usuariosService
      .getUsuario(this.globalService.getIdEmpresa(), id)
      .subscribe(
        (data: UsuarioModel) => {
          this.usuario = data;
          if (this.usuario.senha == password) {
            this.globalService.setUsuario(this.usuario);
            this.globalService.setLogado(true);
          } else {
            this.openSnackBar_OK(`Usuário Ou Senha Incorretos`, 'OK');
          }
        },
        (error: any) => {
          this.usuario = new UsuarioModel();
          this.openSnackBar_OK(`Usuário Ou Senha Incorretos`, 'OK');
        }
      );
  }

  async openSnackBar_OK(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: this.durationInSeconds * 1000,
    });
    await this.delay(this.durationInSeconds * 1000);
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
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
}
