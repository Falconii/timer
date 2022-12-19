export class EstruturaModel {
  public id_empresa: number = 0;
  public conta: string = '';
  public subconta: string = '';
  public descricao: string = '';
  public nivel: number = 0;
  public nivel_maxi: number = 7;
  public tipo: string = '';
  public controle: string = 'S';
  public user_insert: number = 0;
  public user_update: number = 0;
  public acao: string = '1';
  public subItem: boolean = true;
  public pai: string = '1';
  public novo: string = '1';
}
