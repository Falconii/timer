export class ProjetoModel {
  public id_empresa: number = 0;
  public id: number = 0;
  public id_cliente: number = 0;
  public id_diretor: number = 0;
  public dataprop: Date = new Date();
  public dataproj: Date = new Date();
  public dataenc: Date = new Date();
  public descricao: string = '';
  public horasve: number = 0;
  public horasplan: number = 0;
  public horasexec: number = 0;
  public horasdir: number = 0;
  public status: string = '';
  public status_pl: string = '';
  public status_ex: string = '';
  public id_tipo: string = '1';
  public objeto: string = '';
  public obs: string = '';
  public reajuste: Date = new Date();
  public valor: number = 0;
  public id_cond_pgto: number = 0;
  public id_contrato: number = 0;
  public id_parceira: number = 0;
  public assinatura: Date = new Date();
  public user_insert: number = 0;
  public user_update: number = 0;
  public diretor_razao: string = '';
  public cliente_razao: string = '';
  public cliente_gru_econo: number = 0;
  public nivelplan: number = -1;
  public nivelexec: number = -1;
}
