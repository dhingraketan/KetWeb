import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntrowaveComponent } from './introwave/introwave.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceTileComponent } from './service-tile/service-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    IntrowaveComponent,
    NavbarComponent,
    ServiceTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
