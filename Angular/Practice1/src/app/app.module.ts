import { HttpClient } from '@angular/common/http';
import { AnimalService } from './animal.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    DetailComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'detail',component:DetailComponent}
    ])
 
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
