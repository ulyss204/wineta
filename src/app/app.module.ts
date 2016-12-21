import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { WinesComponent } from './wines/wines.component';
import { WineService } from './wines/wine.service';

@NgModule({
  declarations: [
    AppComponent,
    WinesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'search/select', pathMatch: 'full' },
      { path: 'search/select', component: WinesComponent },
      
    ])
  ],
  providers: [WineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
