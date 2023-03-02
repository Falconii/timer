import { UsuarioQuery01Model } from 'src/app/Models/usuario-query_01-model';

export class RespExecData {
  public usuarios: UsuarioQuery01Model[] = [];
  public id_usuario: number = 0;
  public processar: boolean = false;
  public titulo: string = '';
  public texto: string = '';
}
