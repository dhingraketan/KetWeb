import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntrowaveComponent } from './introwave/introwave.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceTileComponent } from './service-tile/service-tile.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ParallaxWindowComponent } from './parallax-window/parallax-window.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { ServicesComponent } from './services/services.component';
import { ContactBlockComponent } from './contact-block/contact-block.component';

@NgModule({
  declarations: [
    AppComponent,
    IntrowaveComponent,
    NavbarComponent,
    ServiceTileComponent,
    AboutMeComponent,
    ParallaxWindowComponent,
    WhyMeComponent,
    ServicesComponent,
    ContactBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
