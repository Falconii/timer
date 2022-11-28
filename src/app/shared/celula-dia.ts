export class CelulaDia {
  public dia: number = 0;
  public data: Date = new Date();
  public semana: number = 0;
  public tipo: number = 0;
  public horasplanejadas: number = 0;
  public descricao: string = '';

  /*
     0 -> normal
     1 -> feriado ou domingo
     2 -> férias
     3 -> fora do mês
  */
}
