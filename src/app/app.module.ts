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
import { HojaRutaComponent } from './component/hoja-ruta/hoja-ruta.component';
import { RespuestasPalmL1Component } from './component/respuestas/respuestas-palm-l1/respuestas-palm-l1.component';
import { RespuestasCacaoL1Component } from './component/respuestas/respuestas-cacao-l1/respuestas-cacao-l1.component';
import { RespuestasLecheL1Component } from './component/respuestas/respuestas-leche-l1/respuestas-leche-l1.component';
import { RespuestasGanaderiaL1Component } from './component/respuestas/respuestas-ganaderia-l1/respuestas-ganaderia-l1.component';
import { RespuestasPalmL2Component } from './component/respuestas/respuestas-palm-l2/respuestas-palm-l2.component';
import { RespuestasPalmL3Component } from './component/respuestas/respuestas-palm-l3/respuestas-palm-l3.component';
import { RespuestasPalmL4Component } from './component/respuestas/respuestas-palm-l4/respuestas-palm-l4.component';
import { RespuestasPalmL5Component } from './component/respuestas/respuestas-palm-l5/respuestas-palm-l5.component';
import { RespuestasPalmL6Component } from './component/respuestas/respuestas-palm-l6/respuestas-palm-l6.component';
import { RespuestasLecheL2Component } from './component/respuestas/respuestas-leche-l2/respuestas-leche-l2.component';
import { RespuestasLecheL3Component } from './component/respuestas/respuestas-leche-l3/respuestas-leche-l3.component';
import { RespuestasLecheL4Component } from './component/respuestas/respuestas-leche-l4/respuestas-leche-l4.component';
import { RespuestasLecheL5Component } from './component/respuestas/respuestas-leche-l5/respuestas-leche-l5.component';
import { RespuestasLecheL6Component } from './component/respuestas/respuestas-leche-l6/respuestas-leche-l6.component';
import { RespuestasGanaderiaL2Component } from './component/respuestas/respuestas-ganaderia-l2/respuestas-ganaderia-l2.component';
import { RespuestasGanaderiaL3Component } from './component/respuestas/respuestas-ganaderia-l3/respuestas-ganaderia-l3.component';
import { RespuestasGanaderiaL4Component } from './component/respuestas/respuestas-ganaderia-l4/respuestas-ganaderia-l4.component';
import { RespuestasGanaderiaL5Component } from './component/respuestas/respuestas-ganaderia-l5/respuestas-ganaderia-l5.component';
import { RespuestasGanaderiaL6Component } from './component/respuestas/respuestas-ganaderia-l6/respuestas-ganaderia-l6.component';
import { RespuestasCacaoL2Component } from './component/respuestas/respuestas-cacao-l2/respuestas-cacao-l2.component';
import { RespuestasCacaoL3Component } from './component/respuestas/respuestas-cacao-l3/respuestas-cacao-l3.component';
import { RespuestasCacaoL4Component } from './component/respuestas/respuestas-cacao-l4/respuestas-cacao-l4.component';
import { RespuestasCacaoL5Component } from './component/respuestas/respuestas-cacao-l5/respuestas-cacao-l5.component';
import { RespuestasCacaoL6Component } from './component/respuestas/respuestas-cacao-l6/respuestas-cacao-l6.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GlosarioComponent,
    HomeComponent,
    CuestionarioComponent,
    FilterPipe,
    FooterComponent,
    ResultadosComponent,
    HojaRutaComponent,


    
    RespuestasPalmL1Component,
    RespuestasCacaoL1Component,
    RespuestasLecheL1Component,
    RespuestasGanaderiaL1Component,
    RespuestasPalmL2Component,
    RespuestasPalmL3Component,
    RespuestasPalmL4Component,
    RespuestasPalmL5Component,
    RespuestasPalmL6Component,
    RespuestasLecheL2Component,
    RespuestasLecheL3Component,
    RespuestasLecheL4Component,
    RespuestasLecheL5Component,
    RespuestasLecheL6Component,
    RespuestasGanaderiaL2Component,
    RespuestasGanaderiaL3Component,
    RespuestasGanaderiaL4Component,
    RespuestasGanaderiaL5Component,
    RespuestasGanaderiaL6Component,
    RespuestasCacaoL2Component,
    RespuestasCacaoL3Component,
    RespuestasCacaoL4Component,
    RespuestasCacaoL5Component,
    RespuestasCacaoL6Component
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
