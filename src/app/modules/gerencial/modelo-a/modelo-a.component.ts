import { Component, OnInit } from '@angular/core';
import { MdaHeader } from '../classes/mda-header';

@Component({
  selector: 'app-modelo-a',
  templateUrl: './modelo-a.component.html',
  styleUrls: ['./modelo-a.component.css'],
})
export class ModeloAComponent implements OnInit {
  mdaHeader: MdaHeader = new MdaHeader();

  constructor() {}

  ngOnInit(): void {
    this.loadDados();
  }

  loadDados() {
    this.mdaHeader = new MdaHeader();
    this.mdaHeader.contratos = [
      'CODIGO',
      'GRUPO',
      'INICIO',
      'CONTRATO',
      'CLIENTES',
      'HORAS',
      'Média Mês',
      'Média Dia/Mês',
    ];
  }

  getStyle() {
    return { 'background-color': 'blue' };
  }
}
