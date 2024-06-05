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
import { ConnectBlockComponent } from './connect-block/connect-block.component';
import { FooterComponent } from './footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BusinessServicePageComponent } from './business-service-page/business-service-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainIntroComponent } from './main-intro/main-intro.component';
import { HomepageServicesBlockComponent } from './homepage-services-block/homepage-services-block.component';
import { ServiceContainerComponent } from './service-container/service-container.component';
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
    ContactBlockComponent,
    ConnectBlockComponent,
    FooterComponent,
    BusinessServicePageComponent,
    HomePageComponent,
    MainIntroComponent,
    HomepageServicesBlockComponent,
    ServiceContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
