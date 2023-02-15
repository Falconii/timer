import { CelulaDia } from './../celula-dia';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cel-calendar',
  templateUrl: './cel-calendar.component.html',
  styleUrls: ['./cel-calendar.component.css'],
})
export class CelCalendarComponent implements OnInit {
  @Input('celula') Celula!: CelulaDia;
  @Output('onClickDay') changeDay = new EventEmitter<CelulaDia>();

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

  onClickDia() {
    this.changeDay.emit(this.Celula);
  }

  onClickPlanejado() {
    if (this.Celula.tipo == 3 || this.Celula.semana == 0) {
      return;
    }
  }

  onClickExecutado() {
    if (this.Celula.tipo == 3 || this.Celula.semana == 0) {
      return;
    }
  }
}
