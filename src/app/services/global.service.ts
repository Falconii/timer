import { UsuariosService } from 'src/app/services/usuarios.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../Models/usuario-model';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  usuario: UsuarioModel;
  logado: boolean = false;
  id_empresa: number = 1;

  shomeMenuEmitter = new EventEmitter<boolean>();

  constructor(private usuarioService: UsuariosService, private router: Router) {
    this.usuario = new UsuarioModel();
    this.logado = false;
  }

  getUsuario(): UsuarioModel {
    return this.usuario;
  }

  setUsuario(user: UsuarioModel) {
    this.usuario = user;
  }

  setLogado(value: boolean) {
    this.shomeMenuEmitter.emit(value);
    this.logado = value;
    this.router.navigate(['/']);
  }

  getLogado(): boolean {
    return this.logado;
  }

  setIdEmpresa(value: number) {
    this.id_empresa = value;
  }

  getIdEmpresa(): number {
    return this.id_empresa;
  }

  getNomeusuarioLogado(): string {
    const nomes = this.usuario.razao.split(' ');
    if (this.logado) {
      return nomes[0];
    } else {
      return 'Login Não Efetuado.';
    }
  }

  okProjetos(): boolean {
    if (
      this.usuarioService.isDiretoria(this.usuario.grupo) ||
      this.usuarioService.isAdm(this.usuario.grupo) ||
      this.usuarioService.isTi(this.usuario.grupo)
    )
      return true;

    return false;
  }

  okPlanejamento(): boolean {
    if (
      this.usuarioService.isDiretoria(this.usuario.grupo) ||
      this.usuarioService.isCoordenador(this.usuario.grupo) ||
      this.usuarioService.isAuditor(this.usuario.grupo) ||
      this.usuarioService.isAdm(this.usuario.grupo) ||
      this.usuarioService.isTi(this.usuario.grupo)
    )
      return true;

    return false;
  }

  okExecucao(): boolean {
    if (
      this.usuarioService.isDiretoria(this.usuario.grupo) ||
      this.usuarioService.isCoordenador(this.usuario.grupo) ||
      this.usuarioService.isAuditor(this.usuario.grupo) ||
      this.usuarioService.isTi(this.usuario.grupo)
    )
      return true;

    return false;
  }
}
