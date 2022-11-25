import { CelulaDia } from './../celula-dia';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cel-calendar',
  templateUrl: './cel-calendar.component.html',
  styleUrls: ['./cel-calendar.component.css'],
})
export class CelCalendarComponent implements OnInit {
  @Input('celula') CelulaDia!: CelulaDia;

  constructor() {}

  ngOnInit() {}
}
