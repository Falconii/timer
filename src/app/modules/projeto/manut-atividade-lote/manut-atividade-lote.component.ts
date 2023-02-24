import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-manut-atividade-lote',
  templateUrl: './manut-atividade-lote.component.html',
  styleUrls: ['./manut-atividade-lote.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManutAtividadeLoteComponent implements OnInit {
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  constructor() {}

  ngOnInit() {}
}
