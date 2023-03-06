import { ClientesQuery01Model } from './../../../Models/cliente-query_01-model';
import { ClientesService } from './../../../services/clientes.service';
import { GlobalService } from './../../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ParametroCliente01 } from 'src/app/parametros/parametro-cliente-01';

@Component({
  selector: 'app-cliente-tabela',
  templateUrl: './cliente-tabela.component.html',
  styleUrls: ['./cliente-tabela.component.css'],
})
export class ClienteTabelaComponent implements OnInit {
  inscricaoGetAll!: Subscription;
  lsClientes: ClientesQuery01Model[] = [];
  displayedColumns: string[] = ['id', 'razao', 'fantasi', 'acao'];

  constructor(
    private globalService: GlobalService,
    private clientesServices: ClientesService
  ) {}

  ngOnInit(): void {
    this.getClientes();
  }

  ngOnDestroy(): void {
    this.inscricaoGetAll?.unsubscribe();
  }

  getClientes() {
    let par = new ParametroCliente01();

    par.id_empresa = 1;
    par.contador = 'N';

    this.globalService.setSpin(true);
    this.inscricaoGetAll = this.clientesServices.getClientes_01(par).subscribe(
      (data: ClientesQuery01Model[]) => {
        this.globalService.setSpin(false);
        this.lsClientes = data;
      },
      (error: any) => {
        this.globalService.setSpin(false);
        this.lsClientes = [];
      }
    );
  }

  onEditar(cliente: ClientesQuery01Model) {
    alert(cliente.razao);
  }
}
