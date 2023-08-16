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
    return this.globalService.validarGuardiaoMestre(route.routeConfig?.path);
  }
}
