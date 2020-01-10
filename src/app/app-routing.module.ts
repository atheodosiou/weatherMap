import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'map',loadChildren:()=>import('./components/map/map.module').then(m=>m.MapModule)},
  {path:'',redirectTo:'/map',pathMatch:'full'},
  {path:'**',loadChildren:()=>import('./components/notFound/notFound.module').then(m=>m.NotFoundModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
