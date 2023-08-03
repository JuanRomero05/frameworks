import { AddResourceComponent } from './add-resource/add-resource.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { NotificationEmitComponent } from './notification-emit/notification-emit.component';
import { PrincipalMenuComponent } from './principal-menu/principal-menu.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
