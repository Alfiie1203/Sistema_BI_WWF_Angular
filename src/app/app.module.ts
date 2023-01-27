import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { GlosarioComponent } from './component/glosario/glosario.component';
import { HomeComponent } from './component/home/home.component';
import { CuestionarioComponent } from './component/cuestionario/cuestionario.component';
import { FilterPipe } from './pipes/filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './component/footer/footer.component';
import { ResultadosComponent } from './component/resultados/resultados.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GlosarioComponent,
    HomeComponent,
    CuestionarioComponent,
    FilterPipe,
    FooterComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
