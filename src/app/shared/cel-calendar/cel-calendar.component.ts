import { CelulaDia } from './../celula-dia';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cel-calendar',
  templateUrl: './cel-calendar.component.html',
  styleUrls: ['./cel-calendar.component.css'],
})
export class CelCalendarComponent implements OnInit {
  @Input('celula') Celula!: CelulaDia;

  constructor() {}

  ngOnInit() {}

  getClasse(): string {
    if (this.Celula.tipo == 3) {
      return 'formata-dia-semana_3';
    } else if (this.Celula.semana == 0) {
      return 'formata-dia-semana_1';
    } else {
      return 'formata-dia-semana';
    }
  }
}
