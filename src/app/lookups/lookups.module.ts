import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LookupsRoutingModule } from './lookups-routing.module';
import { CountryListComponent } from './components/country/country-list/country-list.component';
import { CountryDetailsComponent } from './components/country/country-details/country-details.component';

@NgModule({
  declarations: [CountryListComponent, CountryDetailsComponent],
  imports: [
    CommonModule,
    LookupsRoutingModule
  ]
})
export class LookupsModule { }
