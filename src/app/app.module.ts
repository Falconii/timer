import { AppSnackbar } from './shared/classes/app-snackbar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalService } from './services/global.service';
import { DiganaoGuard } from './guards/diganao.guard';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from './shared/shared.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrPaginatorIntl } from './shared/classes/br-PaginatorIntl';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false,
    }),
  ],
  providers: [
    HttpClient,
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    DiganaoGuard,
    GlobalService,
    { provide: MatPaginatorIntl, useClass: BrPaginatorIntl },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
