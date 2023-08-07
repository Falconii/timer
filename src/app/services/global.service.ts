import { CelulaDia } from '../shared/classes/celula-dia';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../Models/usuario-model';
import { SituacaoTrabalho } from '../shared/classes/situacao-trabalho';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  usuario: UsuarioModel;
  logado: boolean = false;
  id_empresa: number = 1;
  showSpin: boolean = false;
  lsSituacoesTrabalho: SituacaoTrabalho[] = [];
  codigoMotivo: string = '001001';

  shomMenuEmitter = new EventEmitter<boolean>();
  refreshLançamentos = new EventEmitter<CelulaDia>();
  showSpinEmitter = new EventEmitter<boolean>();

  constructor(private usuarioService: UsuariosService, private router: Router) {
    this.usuario = new UsuarioModel();
    this.logado = false;
    this.lsSituacoesTrabalho = [
      { id: '1', descricao: 'Não Iniciado' },
      { id: '2', descricao: 'Em Andamento' },
      { id: '3', descricao: 'Prazo Estourado' },
      { id: '4', descricao: 'Suspenso' },
      { id: '5', descricao: 'Finalizado' },
      { id: '6', descricao: 'Folllow up' },
      { id: '7', descricao: 'Abortado' },
    ];
  }

  getUsuario(): UsuarioModel {
    return this.usuario;
  }

  setUsuario(user: UsuarioModel) {
    this.usuario = user;
  }

  setLogado(value: boolean) {
    this.shomMenuEmitter.emit(value);
    this.logado = value;
    this.router.navigate(['/']);
  }

  setRefreshLançamentos(value: CelulaDia) {
    this.refreshLançamentos.emit(value);
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

  okGerencial(): boolean {
    if (
      this.usuarioService.isDiretoria(this.usuario.grupo) ||
      this.usuarioService.isTi(this.usuario.grupo)
    )
      return true;

    return false;
  }

  setSpin(value: boolean) {
    this.showSpin = value;
    this.showSpinEmitter.emit(this.showSpin);
  }

  getSpin(): boolean {
    return this.showSpin;
  }

  getSituacaoTrabalho(id: string): SituacaoTrabalho {
    let retorno = new SituacaoTrabalho();

    let i: number = this.lsSituacoesTrabalho.findIndex((obj) => obj.id == id);

    if (i >= 0) {
      retorno.id = this.lsSituacoesTrabalho[i].id;
      retorno.descricao = this.lsSituacoesTrabalho[i].descricao;
    }

    return retorno;
  }
}
