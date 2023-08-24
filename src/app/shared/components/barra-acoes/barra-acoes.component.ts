import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MensagensBotoes } from '../../classes/util';
import { CadastroAcoes } from '../../classes/cadastro-acoes';

@Component({
  selector: 'barra-acoes',
  templateUrl: './barra-acoes.component.html',
  styleUrls: ['./barra-acoes.component.css'],
})
export class BarraAcoesComponent implements OnInit {
  @Input('COPY_ESTRUTURA') copy: boolean = false;
  @Input('VISUALIZAR_ESTRUTURA') visualizar: boolean = false;
  @Input('SUBCONTA') subconta: boolean = false;
  @Input('CONSULTAR') consulta: boolean = true;
  @Input('ALTERAR') alterar: boolean = true;
  @Input('EXCLUIR') excluir: boolean = true;

  @Output('changeOpcao') changeOpcao = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  getTexto() {
    return MensagensBotoes;
  }

  getAcoes() {
    return CadastroAcoes;
  }

  onChangeOpcao(op: number) {
    this.changeOpcao.emit(op);
  }
}
