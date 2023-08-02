import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { AddProjectComponent } from './add-project/add-project.component';

@NgModule({
  declarations: [		
    AppComponent,
      AddResourceComponent,
      AddProjectComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
