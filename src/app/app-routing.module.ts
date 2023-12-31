import { AddResourceComponent } from './add-resource/add-resource.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { NotificationEmitComponent } from './notification-emit/notification-emit.component';
import { PrincipalMenuComponent } from './principal-menu/principal-menu.component';
import { ResourceProjectComponent } from './resource-project/resource-project.component';
import { ChartProjectComponent } from './chart-project/chart-project.component';
import { ProgressProjectComponent } from './progress-project/progress-project.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu', component: PrincipalMenuComponent
  },
  {
    path: 'notificacion', component: NotificationEmitComponent
  },
  {
    path: 'recurso', component: AddResourceComponent
  },
  {
    path: 'proyecto', component: AddProjectComponent
  },
  {
    path: 'recurso-proyecto', component: ResourceProjectComponent
  },
  {
    path: 'grafica-proyecto', component: ChartProjectComponent
  },
  {
    path: 'avance-proyecto', component: ProgressProjectComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
