import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root',
})
export class OpcoesGuard implements CanActivate {
  constructor(private globalService: GlobalService) {
    console.log('Criado guard');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (route.routeConfig?.path?.includes('cliente')) {
      if (typeof route.params.acao === 'undefined') return false;
      this.globalService.validarGuardiaoOpcoes('cliente');
      return this.globalService.validarGuardiaoOpcoes(
        'cliente',
        route.params.acao
      );
    }
    return true;
  }
}
