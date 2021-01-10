import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { Site1Component } from './site1/site1.component';
import { Site2Component } from './site2/site2.component';
import { Site4Component } from './site4/site4.component';
import { Site3Component } from './site3/site3.component';
import { Site5Component } from './site5/site5.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Site1Component,
    Site2Component,
    Site4Component,
    Site3Component,
    Site5Component,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
