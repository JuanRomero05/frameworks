import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { NotificationEmitComponent } from './notification-emit/notification-emit.component';
import { PrincipalMenuComponent } from './principal-menu/principal-menu.component';
import { ResourceProjectComponent } from './resource-project/resource-project.component';
import { ChartProjectComponent } from './chart-project/chart-project.component';
import { ProgressProjectComponent } from './progress-project/progress-project.component';

@NgModule({
  declarations: [
    AppComponent,
    AddResourceComponent,
    AddProjectComponent,
    NotificationEmitComponent,
    PrincipalMenuComponent,
    ResourceProjectComponent,
    ChartProjectComponent,
    ProgressProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
