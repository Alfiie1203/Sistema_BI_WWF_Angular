import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuestionarioComponent } from './component/cuestionario/cuestionario.component';
import { GlosarioComponent } from './component/glosario/glosario.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { ResultadosComponent } from './component/resultados/resultados.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'glosario', component: GlosarioComponent},
  {path: 'cuestionario', component: CuestionarioComponent},
  
  {path: 'resultados', component: ResultadosComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
