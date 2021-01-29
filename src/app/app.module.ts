import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Componenet1Component } from './componenet1/componenet1.component';
import { ApproachComponent } from './approach/approach.component';
import { LastComponent } from './last/last.component';
import {HomeService} from './home.service';
import {HttpClientModule} from '@angular/common/http';
import { OverviewComponent } from './overview/overview.component';
import { VismisComponent } from './vismis/vismis.component';
import { PhillosophyComponent } from './phillosophy/phillosophy.component';
import { CbseComponent } from './cbse/cbse.component';
import { ContactusComponent } from './contactus/contactus.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Componenet1Component,
    ApproachComponent,
    LastComponent,
    OverviewComponent,
    VismisComponent,
    PhillosophyComponent,
    CbseComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlickCarouselModule,
    HttpClientModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
