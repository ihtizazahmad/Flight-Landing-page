import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { ReservationCenterComponent } from './components/reservation-center/reservation-center.component';
import { SpecialOffersComponent } from './components/special-offers/special-offers.component';
import { PartnersComponent } from './components/partners/partners.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    SearchFormComponent,
    DestinationsComponent,
    ReservationCenterComponent,
    SpecialOffersComponent,
    PartnersComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-search-form></app-search-form>
      <app-destinations></app-destinations>
      <app-reservation-center></app-reservation-center>
      <app-special-offers></app-special-offers>
      <app-partners></app-partners>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      min-height: 100vh;
    }
  `]
})
export class AppComponent {}
