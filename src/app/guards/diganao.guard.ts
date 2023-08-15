import { GlobalService } from './../services/global.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiganaoGuard implements CanActivate {
  constructor(private globalService: GlobalService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.globalService.getLogado()) return false;
    console.log(`Principal Estou no canActivate`);
    console.log(route);
    console.log(state);
    console.log(`Path -> ${route.routeConfig?.path}`);
    if (this.globalService.validarGuardiaoMestre(route.routeConfig?.path))
      return true;
    return false;
  }
}
