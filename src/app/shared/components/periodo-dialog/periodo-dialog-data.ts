export class PeriodoDialogData {
  public titulo: string = '';
  public texto: string = '';
  public titulo_data1: string = 'Data Inicial:';
  public dataInicial: Date = new Date();
  public titulo_data2: string = 'Data Final:';
  public dataFinal: Date = new Date();
  public processar: boolean = false;
  public justificativa: string = '';
  public dataHota: Date = new Date();
  public usuarioNome: String = '';
  public temJustificativa: boolean = true;
}
