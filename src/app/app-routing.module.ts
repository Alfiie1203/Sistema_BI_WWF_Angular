import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuestionarioComponent } from './component/cuestionario/cuestionario.component';
import { GlosarioComponent } from './component/glosario/glosario.component';
import { HojaRutaComponent } from './component/hoja-ruta/hoja-ruta.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { RespuestasCacaoL1Component } from './component/respuestas/respuestas-cacao-l1/respuestas-cacao-l1.component';
import { RespuestasCacaoL2Component } from './component/respuestas/respuestas-cacao-l2/respuestas-cacao-l2.component';
import { RespuestasCacaoL3Component } from './component/respuestas/respuestas-cacao-l3/respuestas-cacao-l3.component';
import { RespuestasCacaoL4Component } from './component/respuestas/respuestas-cacao-l4/respuestas-cacao-l4.component';
import { RespuestasCacaoL5Component } from './component/respuestas/respuestas-cacao-l5/respuestas-cacao-l5.component';
import { RespuestasCacaoL6Component } from './component/respuestas/respuestas-cacao-l6/respuestas-cacao-l6.component';
import { RespuestasGanaderiaL1Component } from './component/respuestas/respuestas-ganaderia-l1/respuestas-ganaderia-l1.component';
import { RespuestasGanaderiaL2Component } from './component/respuestas/respuestas-ganaderia-l2/respuestas-ganaderia-l2.component';
import { RespuestasGanaderiaL3Component } from './component/respuestas/respuestas-ganaderia-l3/respuestas-ganaderia-l3.component';
import { RespuestasGanaderiaL4Component } from './component/respuestas/respuestas-ganaderia-l4/respuestas-ganaderia-l4.component';
import { RespuestasGanaderiaL5Component } from './component/respuestas/respuestas-ganaderia-l5/respuestas-ganaderia-l5.component';
import { RespuestasGanaderiaL6Component } from './component/respuestas/respuestas-ganaderia-l6/respuestas-ganaderia-l6.component';
import { RespuestasLecheL1Component } from './component/respuestas/respuestas-leche-l1/respuestas-leche-l1.component';
import { RespuestasLecheL2Component } from './component/respuestas/respuestas-leche-l2/respuestas-leche-l2.component';
import { RespuestasLecheL3Component } from './component/respuestas/respuestas-leche-l3/respuestas-leche-l3.component';
import { RespuestasLecheL4Component } from './component/respuestas/respuestas-leche-l4/respuestas-leche-l4.component';
import { RespuestasLecheL5Component } from './component/respuestas/respuestas-leche-l5/respuestas-leche-l5.component';
import { RespuestasLecheL6Component } from './component/respuestas/respuestas-leche-l6/respuestas-leche-l6.component';
import { RespuestasPalmL1Component } from './component/respuestas/respuestas-palm-l1/respuestas-palm-l1.component';
import { RespuestasPalmL2Component } from './component/respuestas/respuestas-palm-l2/respuestas-palm-l2.component';
import { RespuestasPalmL3Component } from './component/respuestas/respuestas-palm-l3/respuestas-palm-l3.component';
import { RespuestasPalmL4Component } from './component/respuestas/respuestas-palm-l4/respuestas-palm-l4.component';
import { RespuestasPalmL5Component } from './component/respuestas/respuestas-palm-l5/respuestas-palm-l5.component';
import { RespuestasPalmL6Component } from './component/respuestas/respuestas-palm-l6/respuestas-palm-l6.component';
import { ResultadosComponent } from './component/resultados/resultados.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'glosario', component: GlosarioComponent},
  {path: 'cuestionario', component: CuestionarioComponent},  
  {path: 'hojaderuta', component: HojaRutaComponent},
  {path: 'resultados', component: ResultadosComponent},

  {path: 'palma1', component: RespuestasPalmL1Component},
  {path: 'palma2', component: RespuestasPalmL2Component},
  {path: 'palma3', component: RespuestasPalmL3Component},
  {path: 'palma4', component: RespuestasPalmL4Component},
  {path: 'palma5', component: RespuestasPalmL5Component},
  {path: 'palma6', component: RespuestasPalmL6Component},

  {path: 'cacao1', component: RespuestasCacaoL1Component},
  {path: 'cacao2', component: RespuestasCacaoL2Component},
  {path: 'cacao3', component: RespuestasCacaoL3Component},
  {path: 'cacao4', component: RespuestasCacaoL4Component},
  {path: 'cacao5', component: RespuestasCacaoL5Component},
  {path: 'cacao6', component: RespuestasCacaoL6Component},

  {path: 'leche1', component: RespuestasLecheL1Component},
  {path: 'leche2', component: RespuestasLecheL2Component},
  {path: 'leche3', component: RespuestasLecheL3Component},
  {path: 'leche4', component: RespuestasLecheL4Component},
  {path: 'leche5', component: RespuestasLecheL5Component},
  {path: 'leche6', component: RespuestasLecheL6Component},

  {path: 'ganaderia1', component: RespuestasGanaderiaL1Component},
  {path: 'ganaderia2', component: RespuestasGanaderiaL2Component},
  {path: 'ganaderia3', component: RespuestasGanaderiaL3Component},
  {path: 'ganaderia4', component: RespuestasGanaderiaL4Component},
  {path: 'ganaderia5', component: RespuestasGanaderiaL5Component},
  {path: 'ganaderia6', component: RespuestasGanaderiaL6Component},
  
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
