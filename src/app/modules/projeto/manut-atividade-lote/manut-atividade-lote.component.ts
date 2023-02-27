import { ProjetoModel } from 'src/app/Models/projeto-model';
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
})
export class ManutAtividadeLoteComponent implements OnInit {
  projeto: ProjetoModel = new ProjetoModel();

  constructor() {}

  ngOnInit() {}

  onRetorno(): void {}
}
