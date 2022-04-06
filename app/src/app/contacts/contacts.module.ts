import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactHeaderComponent } from './components/contact-header/contact-header.component';
import { ContactMainComponent } from './components/contact-main/contact-main.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { MapsComponent } from './components/maps/maps.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    ContactHeaderComponent,
    ContactMainComponent,
    ContactFormComponent,
    MapsComponent,
  ],
  imports: [CommonModule, FormsModule, GoogleMapsModule],
})
export class ContactsModule {}
