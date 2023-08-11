import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioQuery01Model } from 'src/app/Models/usuario-query_01-model';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-barra-parametrosv01',
  templateUrl: './barra-parametrosv01.component.html',
  styleUrls: ['./barra-parametrosv01.component.css'],
})
export class BarraParametrosv01Component implements OnInit {
  @Input('diretores') diretores!: UsuarioQuery01Model[];
  @Input('coordenadores') coordenadores!: UsuarioQuery01Model[];
  @Input('auditores') auditores!: UsuarioQuery01Model[];

  @Output('changePage') change = new EventEmitter();

  parametro: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private globalService: GlobalService,
    private router: Router
  ) {
    this.parametro = formBuilder.group({
      diretores: [{ value: '' }],
      coordenadores: [{ value: '' }],
      auditores: [{ value: '' }],
    });
    this.setParametro();
  }

  ngOnInit() {}

  setParametro() {
    this.parametro.setValue({
      diretores: this.diretores,
      coordenadores: this.coordenadores,
      auditores: this.auditores,
    });
  }
}
