import { UsuarioModel } from './Models/usuario-model';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from './services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'timer';

  showMenu: boolean = false;

  constructor(private globalService: GlobalService, private router: Router) {}

  ngOnInit(): void {
    this.globalService.shomeMenuEmitter.subscribe((show) => {
      this.showMenu = show;
    });
  }

  ngOnDestroy(): void {
    this.globalService.shomeMenuEmitter.unsubscribe();
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  getUsuario(): string {
    return this.globalService.getNomeusuarioLogado();
  }

  okProjetos(): boolean {
    return this.globalService.okProjetos();
  }

  okPlanejamento(): boolean {
    return this.globalService.okPlanejamento();
  }

  okExecucao(): boolean {
    return this.globalService.okExecucao();
  }
}
