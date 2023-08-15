import { GuardiaoMestre } from './../shared/classes/guardiao-mestre';
import { CelulaDia } from '../shared/classes/celula-dia';
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
  showSpin: boolean = false;
  showSpinApontamentos: boolean = false;
  //lsSituacoesTrabalho: SituacaoTrabalho[] = [];
  codigoMotivo: string = '001001';
  guadiaoMestre: GuardiaoMestre[] = [];

  shomMenuEmitter = new EventEmitter<boolean>();
  refreshLançamentos = new EventEmitter<CelulaDia>();
  showSpinEmitter = new EventEmitter<boolean>();
  showSpinApontamentosEmitter = new EventEmitter<boolean>();

  constructor(private usuarioService: UsuariosService, private router: Router) {
    this.usuario = new UsuarioModel();
    this.logado = false;
    /*
    this.lsSituacoesTrabalho = [
      { id: '1', descricao: 'Não Iniciado' },
      { id: '2', descricao: 'Em Andamento' },
      { id: '3', descricao: 'Prazo Estourado' },
      { id: '4', descricao: 'Suspenso' },
      { id: '5', descricao: 'Finalizado' },
      { id: '6', descricao: 'Folllow up' },
      { id: '7', descricao: 'Abortado' },
    ];
    */
    this.loadGuardiaoMestre();
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

  okCadastros(): boolean {
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

  setSpinApontamentos(value: boolean) {
    this.showSpinApontamentos = value;
    this.showSpinApontamentosEmitter.emit(this.showSpinApontamentos);
  }

  getSpinApontamentos(): boolean {
    return this.showSpinApontamentos;
  }

  /*
  getSituacaoTrabalho(id: string): SituacaoTrabalho {
    let retorno = new SituacaoTrabalho();

    let i: number = this.lsSituacoesTrabalho.findIndex((obj) => obj.id == id);

    if (i >= 0) {
      retorno.id = this.lsSituacoesTrabalho[i].id;
      retorno.descricao = this.lsSituacoesTrabalho[i].descricao;
    }

    return retorno;
  }
*/
  loadGuardiaoMestre() {
    let guard = new GuardiaoMestre();
    this.guadiaoMestre = [];

    guard.path = 'empresas';
    guard.grupos = [900, 906];
    this.guadiaoMestre.push(guard);

    guard = new GuardiaoMestre();
    guard.path = 'usuarios';
    guard.grupos.push(0);
    this.guadiaoMestre.push(guard);

    guard = new GuardiaoMestre();
    guard.path = 'clientes';
    guard.grupos.push(0);
    this.guadiaoMestre.push(guard);

    guard = new GuardiaoMestre();
    guard.path = 'users';
    guard.grupos = [900, 904, 906];
    this.guadiaoMestre.push(guard);

    guard = new GuardiaoMestre();
    guard.path = 'economicos';
    guard.grupos = [900, 904, 906];
    this.guadiaoMestre.push(guard);

    guard = new GuardiaoMestre();
    guard.path = 'motivos';
    guard.grupos = [900, 904, 906];
    this.guadiaoMestre.push(guard);

    guard = new GuardiaoMestre();
    guard.path = 'estruturas';
    guard.grupos = [900, 901, 904, 906];
    this.guadiaoMestre.push(guard);

    console.log(this.guadiaoMestre);
  }

  validarGuardiaoMestre(value?: string): boolean {
    if (typeof value === 'undefined') return false;
    let guard: GuardiaoMestre = new GuardiaoMestre();

    this.guadiaoMestre.forEach((guardiao) => {
      console.log(`${value?.length}  => ${guardiao.path.length}`);
      if (guardiao.path === value) {
        guard = guardiao;
      }
    });

    if (guard.path == '') return false;

    if (guard.grupos[0] == 0) return true;

    let idx = guard.grupos.findIndex((gru) => gru == this.usuario.grupo);

    return idx == -1 ? false : true;
  }
}
